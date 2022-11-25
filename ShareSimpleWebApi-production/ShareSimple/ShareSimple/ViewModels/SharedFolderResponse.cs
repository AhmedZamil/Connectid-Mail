using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShareSimple.Models;

namespace ShareSimple.ViewModels
{
    public class SharedFolderResponse
    {
        public AdminFolderModel AdminFolder { get; set; }
        public int SharedWith { get; set; }
        public int NoOfFiles { get; set; }
        public List<FileMetaData> Files { get; set; }

    }
}
