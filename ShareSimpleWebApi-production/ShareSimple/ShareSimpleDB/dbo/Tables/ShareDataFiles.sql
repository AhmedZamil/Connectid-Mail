CREATE TABLE [dbo].[ShareDataFiles] (
    [Id]          INT              IDENTITY (1, 1) NOT NULL,
    [FileId]      UNIQUEIDENTIFIER NULL,
    [ShareDataId] UNIQUEIDENTIFIER NULL,
    [Mode]        SMALLINT         NULL,
    CONSTRAINT [PK_ShareDataFiles] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ShareDataFiles_FileMetaData] FOREIGN KEY ([FileId]) REFERENCES [dbo].[FileMetaData] ([FileId]),
    CONSTRAINT [FK_ShareDataFiles_ShareData] FOREIGN KEY ([ShareDataId]) REFERENCES [dbo].[ShareData] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_ShareDataFiles_ShareDataId]
    ON [dbo].[ShareDataFiles]([ShareDataId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_ShareDataFiles_FileId]
    ON [dbo].[ShareDataFiles]([FileId] ASC);

