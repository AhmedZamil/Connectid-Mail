using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class AuthModel
    {
        public string Email { get; set; }
        public string AuthorizationCode { get; set; }
        public string UserToken { get; set; }
    }
}
