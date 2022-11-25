using ShareSimple.ViewModels;

namespace ShareSimple.Interface
{
    public interface IMsgBuilder
    {
        string GetMsgBody(string template, string language, EmailModel emailModel);
        string GetMsgBody(string template, string language, params string[] parameters);
    }
}
