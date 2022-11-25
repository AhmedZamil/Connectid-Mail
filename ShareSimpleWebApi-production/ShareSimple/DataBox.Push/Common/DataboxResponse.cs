using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push.Common
{
    public class DataboxResponse
    {
        public string Id { get; set; }
        public List<string> Metrics { get; set; }
        public List<string> Errors { get; set; }
        public string Message { get; set; }
    }
}
