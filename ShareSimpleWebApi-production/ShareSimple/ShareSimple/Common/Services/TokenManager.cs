using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShareSimple.Interface;

namespace ShareSimple.Common.Services
{
    public class TokenManager : ITokenManager
    {
        private readonly IUserRepository _userRepository;

        public TokenManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> TokenValid(Guid userId, string token)
        {
            bool isValid = false;
            
            var user = await _userRepository.GetUserById(userId);


            if (user != null && user.AccessToken == token)
            {
                isValid = true;
            }
            return isValid;
        }
    }

}
