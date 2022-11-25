using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PostDataField
    {
        public PostDataField()
        {
            PostDataFieldValue = new HashSet<PostDataFieldValue>();
            PostDataFiles = new HashSet<PostDataFiles>();
        }

        public Guid Id { get; set; }
        public string FieldName { get; set; }
        public string FieldType { get; set; }
        public string FieldValue { get; set; }
        public Guid? PostDataId { get; set; }
        public DateTime? SendDate { get; set; }
        public DateTime? ReceivedDate { get; set; }

        public PostData PostData { get; set; }
        public ICollection<PostDataFieldValue> PostDataFieldValue { get; set; }
        public ICollection<PostDataFiles> PostDataFiles { get; set; }
    }
}
