using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using ShareSimple.Common.Enums;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;

namespace ShareSimple.Common.eConomic
{
    public class EconomicService : IEconomicService
    {
        private readonly bool _demoApi = false;
        private readonly string _apiBaseUrl;
        private readonly Dictionary<string, string> _requestHeaders;
        private readonly string _defaultPaymentTermsName = "Connectid Mail";
        private readonly string _defaultPaymentTermsType = "net";
        private readonly int _defaultDaysOfCredit = 14;
        private readonly int _accountNumber;
        private readonly EconomicSettings _economicSettings;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public EconomicService(IOptions<EconomicSettings> economicSettings, ISurveillanceRepository surveillanceRepository)
        {
            _surveillanceRepository = surveillanceRepository;
            _economicSettings = economicSettings.Value;
            _apiBaseUrl = economicSettings.Value?.ApiBaseUrl ?? "https://restapi.e-conomic.com";
            _demoApi = economicSettings.Value?.Demo ?? false;
            _accountNumber = economicSettings.Value?.AccountNumber ?? 0;
            _requestHeaders = new Dictionary<string, string>()
            {
                { "X-AppSecretToken", economicSettings.Value?.AppSecretToken },
                { "X-AgreementGrantToken", economicSettings.Value?.AgreementGrantToken},
                { "Content-Type","application/json" }
            };
        }
        private string GetFullEndpointUrl(string relativeUrl)
        {
            var url = _apiBaseUrl;
            if (url.EndsWith("/") || relativeUrl.StartsWith("/"))
            {
                url = $"{url}{relativeUrl}";
            }
            else
            {
                url = $"{url}/{relativeUrl}";
            }
            if (_demoApi)
            {
                url = $"{url}?demo=true";
            }
            return url;
        }
        public void DownloadInvoicePdf(int bookedInvoiceNo, string filePath)
        {
            var endpoint = GetFullEndpointUrl($"invoices/booked/{bookedInvoiceNo}/pdf");
            RestClient.Download(endpoint, _requestHeaders, filePath);
        }
        private PaymentTerms GetPaymentTerms(string name)
        {
            var endpoint = GetFullEndpointUrl($"payment-terms?filter=name$eq:{Uri.EscapeUriString(name)}");
            var paymentTermsList = RestClient.Get<PaymentTermsCollection>(endpoint, _requestHeaders);
            return (paymentTermsList?.Collection?.Count ?? 0) > 0 ? paymentTermsList.Collection[0] : null;
        }
        private PaymentTerms AddPaymentTerms(string name)
        {
            var ePaymentTerms = GetPaymentTerms(name);
            if (ePaymentTerms == null)
            {
                var newPaymentTerms = new PaymentTerms()
                {
                    Name = name,
                    PaymentTermsType = _defaultPaymentTermsType,
                    DaysOfCredit = _defaultDaysOfCredit
                };
                var endpoint = GetFullEndpointUrl("payment-terms/");
                ePaymentTerms = RestClient.Post<PaymentTerms, PaymentTerms>(endpoint, _requestHeaders, newPaymentTerms);
                return ePaymentTerms;
            }
            else
            {
                return ePaymentTerms;
            }
        }
        public Customer GetCustomer(int id)
        {
            var endpoint = GetFullEndpointUrl($"customers/{id}");
            var customer = RestClient.Get<Customer>(endpoint, _requestHeaders);
            return customer;
        }
        private Product GetProductByName(string name)
        {
            var endpoint = GetFullEndpointUrl($"products?filter=name$eq:{Uri.EscapeUriString(name)}");
            var productList = RestClient.Get<ProductCollection>(endpoint, _requestHeaders);
            return (productList?.Collection?.Count ?? 0) > 0 ? productList.Collection[0] : null;
        }
        public Customer SaveCustomer(Company company, string currency, User contactPersion, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!CheckeConomicSettings($"skipped saving customer in eConomic for company {company?.Name}", httpContext, userId)) return null;
            try
            {
                bool create = !company.EconomicId.HasValue;
                var customer = new Customer()
                {
                    Name = company.Name,
                    Address = company.Address,
                    City = company.City,
                    CorporateIdentificationNumber = company.Cvr,
                    Country = company.Country,
                    CustomerGroup = CustomerGroups.GetCustomerGroupByCountryName(company.Country),
                    VatZone = VatZones.GetvatZoneByCountryName(company.Country),
                    Zip = company.PostalCode,
                    Website = company.WebSite,
                    Email = contactPersion?.Email
                };
                customer.Currency = currency;
                if (string.IsNullOrWhiteSpace(customer.Currency) && !string.IsNullOrWhiteSpace(_economicSettings.DefaultCurrency))
                {
                    customer.Currency = _economicSettings.DefaultCurrency;
                }
                if (_economicSettings.DefaultPaymentTermId.HasValue)
                {
                    customer.PaymentTerms = new PaymentTerms()
                    {
                        PaymentTermsNumber = _economicSettings.DefaultPaymentTermId.Value
                    };
                }
                else
                {
                    customer.PaymentTerms = AddPaymentTerms(_defaultPaymentTermsName);
                }
                string endpoint;
                Customer eCustomer;
                if (create)
                {
                    endpoint = GetFullEndpointUrl("customers");
                    eCustomer = RestClient.Post<Customer, Customer>(endpoint, _requestHeaders, customer);
                    _surveillanceRepository.Info(httpContext, userId, ActionType.eConomic, $"Customer added successfully in eConomic for company {company?.Name}");
                }
                else
                {
                    endpoint = GetFullEndpointUrl($"customers/{company.EconomicId.Value}");
                    eCustomer = RestClient.Put<Customer, Customer>(endpoint, _requestHeaders, customer);
                    _surveillanceRepository.Info(httpContext, userId, ActionType.eConomic, $"Customer updated successfully in eConomic for company {company?.Name}");
                }
                return eCustomer;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(httpContext, userId, $"Error in saving customer in eConomic for company {company?.Name}. Error: {ex.Message}", Severity.Medium, ex, ActionType.eConomic);
            }
            return null;
        }
        public Invoice GenerateInvoice(Company company, DateTime invoiceDate, decimal unitPrice, string currency, int noOfUsers, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!CheckeConomicSettings($"skipped generating invoice in eConomic for company {company?.Name} on date {invoiceDate}", httpContext, userId)) return null;
            try
            {
                var draftInvoice = new Invoice()
                {
                    Currency = currency,
                    Customer = new Customer() { CustomerNumber = company.EconomicId },
                    Date = invoiceDate.ToString("yyyy-MM-dd"),
                    Layout = Layouts.Eng_std_m_bankoplys_1_5_07_01_14

                };
                if(string.IsNullOrWhiteSpace(draftInvoice.Currency) && !string.IsNullOrWhiteSpace(_economicSettings.DefaultCurrency))
                {
                    draftInvoice.Currency = _economicSettings.DefaultCurrency;
                }
                if (_economicSettings.DefaultPaymentTermId.HasValue)
                {
                    draftInvoice.PaymentTerms = new PaymentTerms() { PaymentTermsNumber = _economicSettings.DefaultPaymentTermId.Value };
                }
                else
                {
                    draftInvoice.PaymentTerms = AddPaymentTerms(_defaultPaymentTermsName);
                }
                var recipient = new Recipient() { Name = company.Name, Address = company.Address, City = company.City, Country = company.Country, };
                recipient.VatZone = VatZones.GetvatZoneByCountryName(company.Country);
                draftInvoice.Recipient = recipient;
                var invoiceLine = new InvoiceLine()
                {
                    LineNumber = 1,
                    Quantity = noOfUsers,
                    Unit = Units.Stk,
                    UnitNetPrice = unitPrice,
                    SortKey = 1
                };
                if (!string.IsNullOrWhiteSpace(_economicSettings.ProductName))
                {
                    invoiceLine.Product = GetProductByName(_economicSettings.ProductName);
                }
                invoiceLine.Description = (invoiceLine.Product?.Name ?? "Connectid Mail license") + $" for 1 year\n(unit price={unitPrice / 12} {currency} * 12)";
                draftInvoice.Lines = new List<InvoiceLine>() { invoiceLine };
                var draftEndpoint = GetFullEndpointUrl("invoices/drafts");
                var eInvoice = RestClient.Post<Invoice, Invoice>(draftEndpoint, _requestHeaders, draftInvoice);
                var bookInvoiceRequest = new BookInvoiceRequest()
                {
                    DraftInvoice = new DraftInvoice() { DraftInvoiceNumber = eInvoice.DraftInvoiceNumber.Value }
                };
                var bookEndpoint = GetFullEndpointUrl("invoices/booked");
                var bookedInvoice = RestClient.Post<BookInvoiceRequest, Invoice>(bookEndpoint, _requestHeaders, bookInvoiceRequest);
                _surveillanceRepository.Info(httpContext, userId, ActionType.eConomic, $"An invoice is generated successfully for company {company?.Name} on date {invoiceDate} of amount {noOfUsers}*{unitPrice}={noOfUsers * unitPrice}");
                return bookedInvoice;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(httpContext, userId, $"Error in generating invoice in eConomic for company {company?.Name} on date {invoiceDate}. Error: {ex.Message}", Severity.Medium, ex, ActionType.eConomic);
                return null;
            }
        }
        private bool CheckeConomicSettings(string message, HttpContext httpContext = null, Guid? userId = null)
        {
            if (string.IsNullOrWhiteSpace(_economicSettings.AppSecretToken))
            {
                _surveillanceRepository.Warning(httpContext, userId, ActionType.eConomic, $"eConomic settings (AppSecretToken) isn't found and {message}");
                return false;
            }
            return true;
        }
    }
}
