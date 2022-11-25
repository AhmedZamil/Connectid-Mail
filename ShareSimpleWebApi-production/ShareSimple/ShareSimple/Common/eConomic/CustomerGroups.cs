namespace ShareSimple.Common.eConomic
{
    public class CustomerGroups
    {
        public static CustomerGroup Danish
        {
            get
            {
                return new CustomerGroup() { CustomerGroupNumber = 1, Name = "Danske" };
            }
        }
        public static CustomerGroup Foreign
        {
            get
            {
                return new CustomerGroup() { CustomerGroupNumber = 2, Name = "Udenlandske" };
            }
        }
        public static CustomerGroup GetCustomerGroupByCountryName(string countryName)
        {
            if (string.IsNullOrWhiteSpace(countryName))
            {
                return Danish;
            }
            else if (countryName.ToLower() == "denmark")
            {
                return Danish;
            }
            else
            {
                return Foreign;
            }
        }
    }
}
