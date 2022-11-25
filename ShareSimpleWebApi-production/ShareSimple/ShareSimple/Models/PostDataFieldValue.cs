using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PostDataFieldValue
    {
        public int Id { get; set; }
        public Guid? FieldId { get; set; }
        public string FieldValue { get; set; }
        public Guid? ReceiverId { get; set; }

        public PostDataField Field { get; set; }
    }
}
