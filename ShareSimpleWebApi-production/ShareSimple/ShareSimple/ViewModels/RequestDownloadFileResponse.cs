using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class RequestDownloadFileResponse
    {
        public Guid shareId { get; set; }

        public Guid requestDownloadId { get; set; }
        public UserModel sender { get; set; }
        public ReceiverModel receiver { get; set; }
        public List<FileMetaDataResponse> files { get; set; }
    }
}
