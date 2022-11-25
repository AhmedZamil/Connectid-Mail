using ShareSimple.Models;
using System;

namespace ShareSimple.Interface
{
    public interface ITokenInfoRepository
    {
        TokenInfo GetTokenInfo(Guid appToken);
        TokenInfo SaveToken(TokenInfo tokenInfo);
        void DeleteToken(Guid appToken);
    }
}
