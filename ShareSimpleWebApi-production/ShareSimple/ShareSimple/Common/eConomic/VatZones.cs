using System.Collections.Generic;

namespace ShareSimple.Common.eConomic
{
    /// <summary>
    /// https://restapi.e-conomic.com/vat-zones
    /// </summary>
    public class VatZones
    {
        public static VatZone Domestic
        {
            get
            {
                return new VatZone() { VatZoneNumber = 1, Name = "Domestic", EnabledForCustomer = true, EnabledForSupplier = true };
            }
        }
        public static VatZone EU
        {
            get
            {
                return new VatZone() { VatZoneNumber = 2, Name = "EU", EnabledForCustomer = true, EnabledForSupplier = true };
            }
        }
        public static VatZone Abroad
        {
            get
            {
                return new VatZone() { VatZoneNumber = 3, Name = "Abroad", EnabledForCustomer = true, EnabledForSupplier = true };
            }
        }
        public static VatZone DomesticExemptVAT
        {
            get
            {
                return new VatZone() { VatZoneNumber = 4, Name = "Domestic exempt VAT", EnabledForCustomer = true, EnabledForSupplier = false };
            }
        }
        public static VatZone GetvatZoneByCountryName(string countryName)
        {
            List<string> euCountries = new List<string>()
                {
                    "austria",
                    "belgium",
                    "bulgaria",
                    "croatia",
                    "cyprus",
                    "czechia",
                    "czech republic",
                    "denmark",
                    "estonia",
                    "finland",
                    "france",
                    "germany",
                    "greece",
                    "hungary",
                    "ireland",
                    "italy",
                    "latvia",
                    "lithuania",
                    "luxembourg",
                    "malta",
                    "netherlands",
                    "poland",
                    "portugal",
                    "romania",
                    "slovakia",
                    "slovenia",
                    "spain",
                    "sweden",
                    "united kingdom"
                };
            if (string.IsNullOrWhiteSpace(countryName))
            {
                return Domestic;
            }
            else if (countryName.ToLower() == "denmark")
            {
                return Domestic;
            }
            else if (euCountries.Contains(countryName.ToLower()))
            {
                return EU;
            }
            else
            {
                return Abroad;
            }
        }
    }
}
