namespace ShareSimpleExpiredFileCleaner.DataContact
{
    class CompanyStatus
    {
        public int TrialEndingMailSent { get; set; }
        public int UpgradedToPaid { get; set; }
        public int InvoiceGenerated { get; set; }
        public string JobLog { get; set; }
    }
}
