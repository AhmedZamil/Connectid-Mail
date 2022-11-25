using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class PostDataFieldsResponse
    {
        public Guid postdataId { get; set; }

        public UserModel sender { get; set; }
        public ReceiverModel receiver { get; set; }
        public List<PostDataFieldModel> fields { get; set; }
    }
}
