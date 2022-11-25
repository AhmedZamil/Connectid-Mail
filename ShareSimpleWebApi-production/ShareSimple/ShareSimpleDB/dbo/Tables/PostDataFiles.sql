CREATE TABLE [dbo].[PostDataFiles] (
    [Id]              INT              IDENTITY (1, 1) NOT NULL,
    [FileId]          UNIQUEIDENTIFIER NULL,
    [PostDataId]      UNIQUEIDENTIFIER NULL,
    [PostDataFieldId] UNIQUEIDENTIFIER NULL,
    [Mode]            SMALLINT         NULL,
    [ReceiverId]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_PostDataFiles] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_PostDataFiles_FileMetaData] FOREIGN KEY ([FileId]) REFERENCES [dbo].[FileMetaData] ([FileId]),
    CONSTRAINT [FK_PostDataFiles_PostData] FOREIGN KEY ([PostDataId]) REFERENCES [dbo].[PostData] ([Id]),
    CONSTRAINT [FK_PostDataFiles_PostDataFiles] FOREIGN KEY ([PostDataFieldId]) REFERENCES [dbo].[PostDataField] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_PostDataFiles_PostDataId]
    ON [dbo].[PostDataFiles]([PostDataId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_PostDataFiles_PostDataFieldId]
    ON [dbo].[PostDataFiles]([PostDataFieldId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_PostDataFiles_FileId]
    ON [dbo].[PostDataFiles]([FileId] ASC);

