using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IUserHistoryRepository : IDisposable
    {
        Task<IEnumerable<UserHistory>> GetUserHistories();
        Task<IEnumerable<UserHistory>> GetUserHistoriesById(Guid companyId);
        void InsertUserHistory(UserHistory userHistory);
        void UpdateUserHistory(UserHistory userHistory);
        void DeleteUserHistory(int id);
        Task Save();

    }
}
