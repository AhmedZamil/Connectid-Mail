using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ShareSimple.Common.eConomic
{
    public class Account
    {
        public int AccountNumber { get; set; }
    }
    public class CustomerGroup
    {
        [Required]
        public int CustomerGroupNumber { get; set; }
        public string Name { get; set; }
        [Required]
        public Account Account { get; set; }
        public Layout Layout { get; set; }
        public string Self { get; set; }
    }
    public class CustomerGroupCollection
    {
        public List<CustomerGroup> Collection { get; set; }
    }
    public class VatZone
    {
        public int VatZoneNumber { get; set; }
        public string Name { get; set; }
        public bool? EnabledForCustomer { get; set; }
        public bool? EnabledForSupplier { get; set; }
        public string Self { get; set; }
    }
    public class Layout
    {
        public int LayoutNumber { get; set; }
        public string Name { get; set; }
        public string Self { get; set; }
    }
    public class PaymentTerms
    {
        [Required]
        public string Name { get; set; }
        /// <summary>
        /// The number of days of credit on the invoice. This field is only valid if terms of payment is not of type 'duedate'
        /// </summary>
        [Required]
        public int DaysOfCredit { get; set; }
        /// <summary>
        /// enum": ["net", "invoiceMonth", "paidInCash", "prepaid", "dueDate", "factoring", "invoiceWeekStartingSunday", "invoiceWeekStartingMonday", "creditcard", "avtaleGiro"]
        /// </summary>
        [Required]
        public string PaymentTermsType { get; set; }
        public string Description { get; set; } = "";
        public int? PaymentTermsNumber { get; set; }
        public Account ContraAccountForPrepaidAmount { get; set; }
        public Account ContraAccountForRemainderAmount { get; set; }
        public Customer CreditCardCompany { get; set; }
        public decimal? PercentageForPrepaidAmount { get; set; }
        public decimal? PercentageForRemainderAmount { get; set; }
        public string Self { get; set; }
    }
    public class PaymentTermsCollection
    {
        public List<PaymentTerms> Collection { get; set; }
    }
    public class Employee
    {
        public int EmployeeNumber { get; set; }
    }
    public class Customer
    {
        public int? CustomerNumber { get; set; }
        public string Name { get; set; }
        /// <summary>
        /// The default payment terms for the customer.
        /// </summary>
        [Required]
        public PaymentTerms PaymentTerms { get; set; }
        /// <summary>
        /// Address for the customer including street and number.
        /// </summary>
        [MaxLength(510)]
        public string Address { get; set; }
        /// <summary>
        /// The outstanding amount for this customer.
        /// </summary>
        public decimal? Balance { get; set; }
        /// <summary>
        /// The customer's city.
        /// </summary>
        [MaxLength(50)]
        public string City { get; set; }
        /// <summary>
        /// The customer's country.
        /// </summary>
        [MaxLength(50)]
        public string Country { get; set; }
        /// <summary>
        /// Default payment currency.
        /// </summary>
        [MaxLength(3), Required]
        public string Currency { get; set; }
        /// <summary>
        /// In order to set up a new customer, it is necessary to specify a customer group. It is useful to group a company’s customers (e.g., ‘domestic’ and ‘foreign’ customers) and to link the group members to the same account when generating reports.
        /// </summary>
        [Required]
        public CustomerGroup CustomerGroup { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(255)]
        public string Email { get; set; }
        /// <summary>
        /// Indicates in which VAT-zone the customer is located (e.g.: domestically, in Europe or elsewhere abroad)
        /// </summary>
        [Required]
        public VatZone VatZone { get; set; }
        [MaxLength(50)]
        public string MobilePhone { get; set; }
        [MaxLength(50)]
        public string VatNumber { get; set; }
        [MaxLength(255)]
        public string Website { get; set; }
        /// <summary>
        /// Corporate Identification Number. For example CVR in Denmark.
        /// </summary>
        [MaxLength(40)]
        public string CorporateIdentificationNumber { get; set; }
        /// <summary>
        /// Boolean indication of whether the customer is barred from invoicing
        /// </summary>
        public bool? Barred { get; set; }

        /// <summary>
        /// Extension of corporate identification number (CVR). Identifying separate production unit (p-nummer)
        /// </summary>
        [MaxLength(10)]
        public string PNumber { get; set; }
        /// <summary>
        /// A maximum credit for this customer. Once the maximum is reached or passed in connection with an order/quotation/invoice for this customer you see a warning in e-conomic
        /// </summary>
        public decimal? CreditLimit { get; set; }
        /// <summary>
        /// European Article Number. EAN is used for invoicing the Danish public sector.
        /// </summary>
        [MaxLength(40)]
        public string Ean { get; set; }
        /// <summary>
        /// Layout to be applied for invoices and other documents for this customer
        /// </summary>
        public Layout Layout { get; set; }
        [MaxLength(30)]
        public string Zip { get; set; }
        /// <summary>
        /// The public entry number is used for electronic invoicing, to define the account invoices will be registered on at the customer
        /// </summary>
        [MaxLength(50)]
        public string PublicEntryNumber { get; set; }
        /// <summary>
        /// The customer's telephone and/or fax number.
        /// </summary>
        [MaxLength(255)]
        public string TelephoneAndFaxNumber { get; set; }
        /// <summary>
        /// Reference to the employee responsible for contact with this customer.
        /// </summary>
        public Employee SalesPerson { get; set; }
        public object PriceGroup { get; set; }
        public string Self { get; set; }
    }
    public class CustomerCollection
    {
        public List<Customer> Collection { get; set; }
    }
    #region Invoice models
    public class Project
    {
        public int ProjectNumber { get; set; }
    }
    public enum NemHandelType
    {
        Ean = 0,
        CorporateIdentificationNumber = 1,
        PNumber = 2
    }
    public class Recipient
    {
        /// <summary>
        /// The name of the actual recipient.
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// The street address of the actual recipient.
        /// </summary>
        public string Address { get; set; }
        /// <summary>
        /// The zip code of the actual recipient.
        /// </summary>
        public string Zip { get; set; }
        /// <summary>
        /// The city of the actual recipient.
        /// </summary>
        public string City { get; set; }
        /// <summary>
        /// The country of the actual recipient.
        /// </summary>
        public string Country { get; set; }
        /// <summary>
        /// The 'European Article Number' of the actual recipient.
        /// </summary>
        public string Ean { get; set; }
        /// <summary>
        /// The public entry number of the actual recipient.
        /// </summary>
        public string PublicEntryNumber { get; set; }
        /// <summary>
        /// The person to whom this invoice is addressed.
        /// </summary>
        public CustomerContact Attention { get; set; }
        /// <summary>
        /// Recipient vat zone.
        /// </summary>
        [Required]
        public VatZone VatZone { get; set; }
        /// <summary>
        /// The phone number the invoice was sent to (if applicable).
        /// </summary>
        public string MobilePhone { get; set; }
        /// <summary>
        /// Chosen NemHandel type used for e-invoicing.
        /// </summary>
        public NemHandelType? NemHandelType { get; set; }
    }
    public class DeliverLocation
    {
        public int DeliveryLocationNumber { get; set; }
    }
    public class Note
    {
        public string Heading { get; set; }
        public string TextLine1 { get; set; }
        public string TextLine2 { get; set; }
    }
    public class Delivery
    {
        public string Address { get; set; }
        public string Zip { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string DeliveryTerms { get; set; }
        public string DeliveryDate { get; set; }
    }
    public class CustomerContact
    {
        public int CustomerContactNumber { get; set; }
    }
    public class Reference
    {
        /// <summary>
        /// The customer contact is a reference to the employee at the customer to contact regarding the invoice
        /// </summary>
        public CustomerContact CustomerContact { get; set; }
        /// <summary>
        /// The primary sales person is a reference to the employee who sold the goods on the invoice
        /// </summary>
        public Employee SalesPerson { get; set; }
        /// <summary>
        /// A reference to any second employee involved in the sale
        /// </summary>
        public Employee VendorReference { get; set; }
        /// <summary>
        /// A text field that can be used to save any custom reference on the invoice.
        /// </summary>
        public string Other { get; set; }
    }
    public class Accrual
    {
        /// <summary>
        /// The start date for the accrual. Must be within an existing accounting year. Format: YYYY-MM-DD.
        /// </summary>
        public string StartDate { get; set; }
        /// <summary>
        /// The end date for the accrual. Format: YYYY-MM-DD
        /// </summary>
        public string EndDate { get; set; }
    }
    public class Unit
    {
        public int UnitNumber { get; set; }
        public string Name { get; set; }
    }
    public class Product
    {
        /// <summary>
        /// The unique product number. This can be a stock keeping unit identifier (SKU).
        /// </summary>
        public string ProductNumber { get; set; }
        public string Name { get; set; }
    }
    public class ProductCollection
    {
        public List<Product> Collection { get; set; }
    }
    public class DepartmentalDistribution
    {
        public int DepartmentalDistributionNumber { get; set; }
        public string DistributionType { get; set; }
    }
    public class InvoiceLine
    {
        /// <summary>
        /// The line number is a unique number within the invoice
        /// </summary>
        public int? LineNumber { get; set; }
        /// <summary>
        /// A sort key used to sort the lines in ascending order within the invoice
        /// </summary>
        public int? SortKey { get; set; }
        /// <summary>
        /// A description of the product or service sold. Please note, that when setting existing products, description field is required. While setting non-existing product, description field can remain empty
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// The accrual for the invoice.
        /// </summary>
        public Accrual Accrual { get; set; }
        /// <summary>
        /// The unit of measure applied to the invoice line.
        /// </summary>
        public Unit Unit { get; set; }
        /// <summary>
        /// The product or service offered on the invoice line
        /// </summary>
        public Product Product { get; set; }
        /// <summary>
        /// The number of units of goods on the invoice line.
        /// </summary>
        public decimal? Quantity { get; set; }
        /// <summary>
        /// The price of 1 unit of the goods or services on the invoice line in the invoice currency.
        /// </summary>
        public decimal? UnitNetPrice { get; set; }
        /// <summary>
        /// A line discount expressed as a percentage.
        /// </summary>
        public decimal? DiscountPercentage { get; set; }
        /// <summary>
        /// The cost price of 1 unit of the goods or services in the invoice currency.
        /// </summary>
        public decimal? UnitCostPrice { get; set; }
        /// <summary>
        /// The difference between the net price and the cost price on the invoice line in base currency.
        /// </summary>
        public decimal? MarginInBaseCurrency { get; set; }
        /// <summary>
        /// The margin on the invoice line expressed as a percentage
        /// </summary>
        public decimal? MarginPercentage { get; set; }
        /// <summary>
        /// A departmental distribution defines which departments this entry is distributed between. This requires the departments module to be enabled
        /// </summary>
        public DepartmentalDistribution DepartmentalDistribution { get; set; }
    }
    public class BookInvoiceRequest
    {
        public DraftInvoice DraftInvoice { get; set; }
    }
    public class DraftInvoice
    {
        public int DraftInvoiceNumber { get; set; }
    }
    public class Pdf
    {
        public string Download { get; set; }
    }
    public class Invoice
    {
        public int? DraftInvoiceNumber { get; set; }
        public int? BookedInvoiceNumber { get; set; }
        /// <summary>
        /// Invoice issue date. Format according to ISO-8601 (YYYY-MM-DD).
        /// </summary>
        [Required]
        public string Date { get; set; }
        /// <summary>
        /// The ISO 4217 3-letter currency code of the invoice.
        /// </summary>
        [Required]
        public string Currency { get; set; }
        /// <summary>
        /// The terms of payment for the invoice.
        /// </summary>
        [Required]
        public PaymentTerms PaymentTerms { get; set; }
        [Required]
        public Customer Customer { get; set; }
        /// <summary>
        /// The actual recipient of the invoice. This may be the same info found on the customer (and will probably be so in most cases) but it may also be a different recipient. For instance, the customer placing the order may be ACME Headquarters, but the recipient of the invoice may be ACME IT.
        /// </summary>
        [Required]
        public Recipient Recipient { get; set; }
        /// <summary>
        /// The layout used by the invoice.
        /// </summary>
        [Required]
        public Layout Layout { get; set; }
        public List<InvoiceLine> Lines { get; set; }
        /// <summary>
        /// The desired exchange rate between the invoice currency and the base currency of the agreement. The exchange rate expresses how much it will cost in base currency to buy 100 units of the invoice currency. If no exchange rate is supplied, the system will get the current daily rate, unless the invoice currency is the same as the base currency, in which case it will be set to 100.
        /// </summary>
        public decimal? ExchangeRate { get; set; }
        /// <summary>
        /// The date the invoice is due for payment. Only used if the terms of payment is of type 'duedate', in which case it is mandatory. Format according to ISO-8601 (YYYY-MM-DD).
        /// </summary>
        public string DueDate { get; set; }
        /// <summary>
        /// The total invoice amount in the invoice currency after all taxes and discounts have been applied. For a credit note this amount will be negative.
        /// </summary>
        public decimal? GrossAmount { get; set; }
        /// <summary>
        /// The total invoice amount in the base currency of the agreement after all taxes and discounts have been applied. For a credit note this amount will be negative.
        /// </summary>
        public decimal? GrossAmountInBaseCurrency { get; }
        /// <summary>
        /// The difference between the cost price of the items on the invoice and the sales net invoice amount in base currency. For a credit note this amount will be negative.
        /// </summary>
        public decimal? MarginInBaseCurrency { get; set; }
        /// <summary>
        /// The margin expressed as a percentage. If the net invoice amount is less than the cost price this number will be negative.
        /// </summary>
        public decimal? MarginPercentage { get; set; }
        /// <summary>
        /// The total invoice amount in the invoice currency before all taxes and discounts have been applied. For a credit note this amount will be negative.
        /// </summary>
        public decimal? NetAmount { get; set; }
        /// <summary>
        /// The total rounding error, if any, on the invoice in base currency.
        /// </summary>
        public decimal? RoundingAmount { get; set; }
        /// <summary>
        /// The total amount of VAT on the invoice in the invoice currency. This will have the same sign as net amount
        /// </summary>
        public decimal? VatAmount { get; set; }

        /// <summary>
        /// The project the invoice is connected to.
        /// </summary>
        public Project Project { get; set; }

        /// <summary>
        /// A reference to the place of delivery for the goods on the invoice
        /// </summary>
        public DeliverLocation DeliveryLocation { get; set; }
        /// <summary>
        /// The actual place of delivery for the goods on the invoice. This is usually the same place as the one referenced in the deliveryLocation property, but may be edited as required
        /// </summary>
        public Delivery Delivery { get; set; }
        /// <summary>
        /// Notes on the invoice.
        /// </summary>
        public Note Notes { get; set; }
        /// <summary>
        /// Customer and company references related to this invoice
        /// </summary>
        public Reference References { get; set; }
        public Pdf Pdf { get; set; }

        public string Self { get; set; }
    }
    #endregion
}
