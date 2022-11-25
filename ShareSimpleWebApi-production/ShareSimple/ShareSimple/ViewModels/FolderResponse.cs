using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class FolderResponse
    {
        public UserModel userModel { get; set; }
        public List<PostDataResponse> postDatas { get; set; }
        public List<FileMetaDataResponse> postdataFiles { get; set; }
    }
}
