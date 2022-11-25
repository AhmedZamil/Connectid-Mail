using Microsoft.IdentityModel.Clients.ActiveDirectory;
using ShareSimple.Common;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class AuthRequest
    {
        public string email { get; set; }
        public string code { get; set; }        
        public string redirecturl{ get; set; }
        public string language { get; set; }
    }
}
