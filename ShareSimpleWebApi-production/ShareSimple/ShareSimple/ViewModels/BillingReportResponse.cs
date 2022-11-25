using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class BillingReportResponse
    {
        public int noOfUsers { get; set; }
        public int month { get; set; }
        public int year { get; set; }
        public int noOfShared { get; set; }
        public int noOfPostData { get; set; }
        public string yearmonth { get; set; }

    }
}
