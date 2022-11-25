UPDATE [dbo].[ShareData] SET [SmsAuthenticationEnabled]=0 WHERE [SmsAuthenticationEnabled] IS NULL
ALTER TABLE [dbo].[ShareData] ALTER COLUMN [SmsAuthenticationEnabled] [bit] NOT NULL
ALTER TABLE [dbo].[ShareData] ADD  CONSTRAINT [DF_ShareData_SmsAuthenticationEnabled]  DEFAULT ((0)) FOR [SmsAuthenticationEnabled]