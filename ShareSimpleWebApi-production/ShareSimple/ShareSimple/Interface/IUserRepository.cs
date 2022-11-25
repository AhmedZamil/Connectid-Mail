using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IUserRepository : IDisposable
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUserById(Guid userId);
        Task<IEnumerable<User>> GetUsersByCompanyId(Guid companyId, bool? onlyActive = false);
        Task<User> GetUserByEmail(string userEmail);
        void InsertUser(User user);
        void DeleteUser(Guid userId);
        void UpdateUser(User user);
        Task Save();

    }
}
