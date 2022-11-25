using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class MigrationModel
    {
        public Guid Id { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? Invoiced { get; set; }
    }
}
