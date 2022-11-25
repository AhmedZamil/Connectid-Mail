CREATE TABLE [dbo].[ShareData] (
    [Id]                       UNIQUEIDENTIFIER NOT NULL,
    [SenderId]                 UNIQUEIDENTIFIER NULL,
    [SendDate]                 DATETIME         NULL,
    [ReceivedDate]             DATETIME         NULL,
    [UploadKey]                NVARCHAR (150)   NULL,
    [Mode]                     SMALLINT         NULL,
    [SmsAuthenticationEnabled] BIT              CONSTRAINT [DF_ShareData_SmsAuthenticationEnabled] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_ShareData] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_UserFile_Users1] FOREIGN KEY ([SenderId]) REFERENCES [dbo].[User] ([Id])
);




GO
CREATE NONCLUSTERED INDEX [IX_ShareData_SenderId]
    ON [dbo].[ShareData]([SenderId] ASC);

