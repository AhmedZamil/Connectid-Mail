using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class AssignUserfolderModel
    {
        public Guid? FolderId { get; set; }
        public List<UserModel> UserIds { get; set; }
    }
}
