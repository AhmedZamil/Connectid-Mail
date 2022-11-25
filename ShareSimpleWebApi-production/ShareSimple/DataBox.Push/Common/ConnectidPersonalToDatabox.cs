using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push.Common
{
    public class ConnectidPersonalToDatabox
    {
        public static ConnectidPersonalModels GetProfiles(ProfileList pList)
        {
            var profileModels = new ConnectidPersonalModels();
            var numberOfProfiles = new List<ProfileCount>();
            var numberOfProfilesByCountry = new List<ProfileCountByCountry>();
            foreach (var item in pList.Items)
            {
                var profileCount = new ProfileCount
                {
                    NoOfProfiles = 1,
                    Date = item.Date
                };

                var profileCountByCountry = new ProfileCountByCountry
                {
                    NoOfProfiles = 1,
                    Date = item.Date,
                    CountryCode = item.CountryCode == null ? "Un Known" : item.CountryCode
                };

                var exProfileCount = numberOfProfiles.FirstOrDefault(x => x.Date.Value.Subtract(profileCount.Date.Value).Milliseconds == 0);
                if (exProfileCount != null)
                {
                    exProfileCount.NoOfProfiles += 1;
                }
                else
                {
                    numberOfProfiles.Add(profileCount);
                }

                var exProfileCountByCountry = numberOfProfilesByCountry.FirstOrDefault(x => x.Date.Value.Subtract(profileCount.Date.Value).Milliseconds == 0 && x.CountryCode.Equals(profileCountByCountry.CountryCode));
                if (exProfileCountByCountry != null)
                {
                    exProfileCountByCountry.NoOfProfiles += 1;
                }
                else
                {
                    numberOfProfilesByCountry.Add(profileCountByCountry);
                }
            }
            profileModels.NumberOfProfiles = numberOfProfiles;
            profileModels.NumberOfProfilesByCountry = numberOfProfilesByCountry;

            return profileModels;
        }
    }

    public class ProfileCount
    {
        [JsonProperty(PropertyName = "$Number.Of.Profiles")]
        public int NoOfProfiles { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime? Date { get; set; }
    }

    public class ProfileCountByCountry : ProfileCount
    {
        public string CountryCode { get; set; }
    }

    public class ConnectidPersonalModels
    {
        public List<ProfileCount> NumberOfProfiles { get; set; }
        public List<ProfileCountByCountry> NumberOfProfilesByCountry { get; set; }
    }
}
