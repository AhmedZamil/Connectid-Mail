using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Linq;

namespace ShareSimple.Repository
{
    public class TokenInfoRepository : ITokenInfoRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public TokenInfoRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public TokenInfo GetTokenInfo(Guid appToken)
        {
            return _context.TokenInfo.FirstOrDefault(x => x.AppToken == appToken);
        }
        public TokenInfo SaveToken(TokenInfo tokenInfo)
        {
            var dbTokenInfo = _context.TokenInfo.FirstOrDefault(x => x.AppToken == tokenInfo.AppToken);
            if (dbTokenInfo == null)
            {
                dbTokenInfo = new TokenInfo
                {
                    AppToken = tokenInfo.AppToken,
                    CreatedTime = tokenInfo.CreatedTime,
                    ModifiedTime = null,
                    AccessToken = tokenInfo.AccessToken,
                    RefreshToken = tokenInfo.RefreshToken,
                    TokenType = tokenInfo.TokenType,
                    ExpiresIn = tokenInfo.ExpiresIn
                };
                _context.TokenInfo.Add(dbTokenInfo);
            }
            else
            {
                dbTokenInfo.CreatedTime = tokenInfo.CreatedTime;
                dbTokenInfo.ModifiedTime = tokenInfo.ModifiedTime;
                dbTokenInfo.AccessToken = tokenInfo.AccessToken;
                dbTokenInfo.ExpiresIn = tokenInfo.ExpiresIn;
                dbTokenInfo.RefreshToken = tokenInfo.RefreshToken;
                dbTokenInfo.TokenType = tokenInfo.TokenType;
            }
            _context.SaveChanges();
            return dbTokenInfo;
        }
        public void DeleteToken(Guid appToken)
        {
            var dbTokenInfo = _context.TokenInfo.FirstOrDefault(x => x.AppToken == appToken);
            if (dbTokenInfo != null)
            {
                _context.TokenInfo.Remove(dbTokenInfo);
                _context.SaveChanges();
            }
        }
        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
