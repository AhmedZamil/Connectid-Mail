using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Common.Services
{
    public interface IAdalService
    {
        Task<AuthenticationResult> AcquireTokenByAuthorizationCode(AzureAdClientSettings adSettings, string code, string redirectUri);
        Task<AuthenticationResult> AcquireTokenAsync(AzureAdClientSettings adSettings);
        Task<AuthenticationResult> AcquireTokenSilentAsync(AzureAdClientSettings adSettings, string userId);
    }
}
