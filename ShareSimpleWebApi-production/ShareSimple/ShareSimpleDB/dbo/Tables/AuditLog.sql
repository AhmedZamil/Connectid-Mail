CREATE TABLE [dbo].[AuditLog] (
    [Id]           INT              IDENTITY (1, 1) NOT NULL,
    [PostDataId]   UNIQUEIDENTIFIER NULL,
    [ShareDataId]  UNIQUEIDENTIFIER NULL,
    [SentDate]     DATETIME         NULL,
    [ReceivedDate] DATETIME         NULL,
    CONSTRAINT [PK_AuditLog] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_AuditLog_PostData] FOREIGN KEY ([PostDataId]) REFERENCES [dbo].[PostData] ([Id]),
    CONSTRAINT [FK_AuditLog_ShareData] FOREIGN KEY ([ShareDataId]) REFERENCES [dbo].[ShareData] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_AuditLog_ShareDataId]
    ON [dbo].[AuditLog]([ShareDataId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_AuditLog_PostDataId]
    ON [dbo].[AuditLog]([PostDataId] ASC);

