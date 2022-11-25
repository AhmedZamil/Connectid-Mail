CREATE TABLE [dbo].[RequestDownload] (
    [Id]          UNIQUEIDENTIFIER NOT NULL,
    [ReceiverId]  UNIQUEIDENTIFIER NULL,
    [RequestDate] DATETIME         NULL,
    [SenderId]    UNIQUEIDENTIFIER NULL,
    [DownloadKey] NVARCHAR (50)    NULL,
    CONSTRAINT [PK_RequestDownload] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_RequestDownload_User] FOREIGN KEY ([SenderId]) REFERENCES [dbo].[User] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_RequestDownload_SenderId]
    ON [dbo].[RequestDownload]([SenderId] ASC);

