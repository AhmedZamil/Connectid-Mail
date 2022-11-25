namespace ShareSimple.Common.Enums
{
    public enum Severity
    {
        NotSet = 0,
        High = 1,
        Medium = 2,
        Low = 3
    }
    public enum ActionType
    {
        NotSet,
        API,
        EntryAddIn,
        EntityAdd,
        EntityUpdate,
        EntityDelete,
        WebCRM,
        eConomic,
        MailSend,
        UserStatusChanged,
        Consent,
        Job,
        Authentication,
        FileUpload,
        ShareData,
        OTP,
        SMS
    }
    public enum MessageType
    {
        Debug,
        Info,
        Warning,
        Error,
        Success
    }
}
