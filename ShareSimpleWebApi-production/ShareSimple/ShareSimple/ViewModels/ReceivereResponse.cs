using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class ReceivereResponse
    {
        public IEnumerable<ShareFileReceivers> shareFileReceivers { get; set; }
    }
}
