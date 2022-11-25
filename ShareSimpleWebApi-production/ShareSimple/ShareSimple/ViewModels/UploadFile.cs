using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class UploadFile
    {
        public Guid? fileId { get; set; }
        public IFormFile file { get; set; }
        public string textContent { get; set; }
        public string fileName { get; set; }
        public string senderEmail { get; set; }
        public Guid? senderId { get; set; }
        public Guid? receiverId { get; set; }
        public Guid? shareDataId { get; set; }
        public Guid? PostDataId { get; set; }
        public Guid? PostDataFieldId { get; set; }
        public short? mode { get; set; }
    }
}
