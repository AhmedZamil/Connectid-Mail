using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface ITokenManager
    {
        Task<bool> TokenValid(Guid userId, string token);
    }
}
