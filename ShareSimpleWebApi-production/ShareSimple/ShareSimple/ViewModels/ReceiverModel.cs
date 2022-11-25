using System;

namespace ShareSimple.ViewModels
{
    public class ReceiverModel
    {
        public Guid Id { get; set; }
        public string ReceiverEmail { get; set; }
        public short? Mode { get; set; }
        public string Otp { get; set; }
        public Guid? ReceiverId { get; set; }
        public Guid? PostDataId { get; set; }
        public bool? IsFilled { get; set; }
    }
}