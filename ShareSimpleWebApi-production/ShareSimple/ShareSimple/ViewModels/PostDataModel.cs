using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class PostDataModel
    {
        public Guid? Id { get; set; }
        public Guid? SenderId { get; set; }
        public Guid? ReceiverId { get; set; }
        public string SenderEmail { get; set; }
        public string PostDataKey { get; set; }
        public bool? Mode { get; set; }
        public PostDataField PostDataField { get; set; }
        public List<PostDataField> PostDataFields { get; set; }
    }
}
