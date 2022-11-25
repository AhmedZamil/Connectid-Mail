using Microsoft.IdentityModel.Clients.ActiveDirectory;
using ShareSimple.Common;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class AuthResponse
    {
        public AuthenticationResult authenticationResult { get; set; }
        public GraphOrganization graphOrganization { get; set; }
        public UserModel user { get; set; }
        public bool issuccess { get; set; }
        public string message { get; set; }
        public int trialPeriod { get; set; }
    }
}
