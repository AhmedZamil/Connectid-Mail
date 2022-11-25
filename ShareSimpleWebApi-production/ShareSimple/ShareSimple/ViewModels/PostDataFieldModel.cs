using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PostDataFieldModel
    {
        public Guid Id { get; set; }
        public string FieldName { get; set; }
        public string FieldType { get; set; }
        public string FieldValue { get; set; }
        public List<FileMetaDataResponse> FieldValues { get; set; }
        public Guid? PostDataId { get; set; }
        public DateTime? SendDate { get; set; }
        public DateTime? ReceivedDate { get; set; }

    }
}
