using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class LinkResponse
    {
        public string baseUrl { get; set; }
        public string key { get; set; }
        public Guid? sharedataid { get; set; }
        public Guid? postDataid { get; set; }
    }
}
