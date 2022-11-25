using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Common.Services
{
    public class AdalService : IAdalService
    {
        readonly string authority = "https://login.windows.net/common";
        readonly string resource = "https://graph.microsoft.com";
        readonly TokenCache tokenCache = new TokenCache();

        public async Task<AuthenticationResult> AcquireTokenByAuthorizationCode(AzureAdClientSettings adSettings, string code, string redirectUri)
        {
            var _authContext = new AuthenticationContext(authority, false, tokenCache);
            ClientCredential clientCredential = new ClientCredential(adSettings.ClientId, adSettings.ClientSecret);
            AuthenticationResult result = await _authContext.AcquireTokenByAuthorizationCodeAsync(code, new Uri(redirectUri), clientCredential, resource);
            return result;
        }

        public async Task<AuthenticationResult> AcquireTokenAsync(AzureAdClientSettings adSettings)
        {
            var _authContext = new AuthenticationContext(authority, false, tokenCache);
            ClientCredential clientCredential = new ClientCredential(adSettings.ClientId, adSettings.ClientSecret);
            AuthenticationResult result = await _authContext.AcquireTokenAsync(resource, clientCredential);
            return result;
        }

        public async Task<AuthenticationResult> AcquireTokenSilentAsync(AzureAdClientSettings adSettings, string userId)
        {
            var _authContext = new AuthenticationContext(authority, false, tokenCache);
            ClientCredential clientCredential = new ClientCredential(adSettings.ClientId, adSettings.ClientSecret);
            AuthenticationResult result = await _authContext.AcquireTokenSilentAsync(resource, clientCredential, new UserIdentifier(userId, UserIdentifierType.UniqueId));
            return result;
        }
    }
}
