using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class AuditLogReponse
    {
        public Guid? ShareDataId { get; set; }
        public Guid? PostDataId { get; set; }
        public IEnumerable<ReceiverModel> Receivers { get; set; }
        public UserModel Sender { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? SentDate { get; set; }
        public IEnumerable<FileMetaDataResponse> Files { get; set; }
        public IEnumerable<PostDataFieldModel> Postdatafields { get; set; }
        public short? Mode { get; set; }
    }
}
