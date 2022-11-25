CREATE TABLE [dbo].[SharedFolderFile] (
    [Id]       INT              IDENTITY (1, 1) NOT NULL,
    [FolderId] UNIQUEIDENTIFIER NULL,
    [FileId]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_SharedFolderFile] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ShareFolderFile_AdminFolder] FOREIGN KEY ([FolderId]) REFERENCES [dbo].[AdminFolder] ([Id]),
    CONSTRAINT [FK_ShareFolderFile_FileMetaData] FOREIGN KEY ([FileId]) REFERENCES [dbo].[FileMetaData] ([FileId])
);


GO
CREATE NONCLUSTERED INDEX [IX_SharedFolderFile_FolderId]
    ON [dbo].[SharedFolderFile]([FolderId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_SharedFolderFile_FileId]
    ON [dbo].[SharedFolderFile]([FileId] ASC);

