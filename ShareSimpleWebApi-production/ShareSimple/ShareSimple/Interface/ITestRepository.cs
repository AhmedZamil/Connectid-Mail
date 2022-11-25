using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface ITestRepository
    {
        IEnumerable<User> GetUsers();
    }
}
