CREATE TABLE [dbo].[RequestDownLoadFiles] (
    [Id]                INT              IDENTITY (1, 1) NOT NULL,
    [RequestDownloadId] UNIQUEIDENTIFIER NULL,
    [FileMetadataId]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_RequestDownLoadFiles] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_RequestDownLoadFiles_FileMetaData] FOREIGN KEY ([FileMetadataId]) REFERENCES [dbo].[FileMetaData] ([FileId]),
    CONSTRAINT [FK_RequestDownLoadFiles_RequestDownload] FOREIGN KEY ([RequestDownloadId]) REFERENCES [dbo].[RequestDownload] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_RequestDownLoadFiles_RequestDownloadId]
    ON [dbo].[RequestDownLoadFiles]([RequestDownloadId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_RequestDownLoadFiles_FileMetadataId]
    ON [dbo].[RequestDownLoadFiles]([FileMetadataId] ASC);

