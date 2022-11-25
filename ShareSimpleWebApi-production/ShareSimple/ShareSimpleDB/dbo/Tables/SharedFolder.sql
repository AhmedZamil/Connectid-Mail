CREATE TABLE [dbo].[SharedFolder] (
    [Id]          INT              IDENTITY (1, 1) NOT NULL,
    [FolderId]    UNIQUEIDENTIFIER NULL,
    [UserId]      UNIQUEIDENTIFIER NULL,
    [SharedDate]  DATETIME         NULL,
    [IsGenerated] BIT              NULL,
    [PostDataId]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_SharedFolder] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_SharedFolder_AdminFolder] FOREIGN KEY ([FolderId]) REFERENCES [dbo].[AdminFolder] ([Id]),
    CONSTRAINT [FK_SharedFolder_SharedFolder] FOREIGN KEY ([PostDataId]) REFERENCES [dbo].[PostData] ([Id]),
    CONSTRAINT [FK_SharedFolder_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_SharedFolder_UserId]
    ON [dbo].[SharedFolder]([UserId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_SharedFolder_PostDataId]
    ON [dbo].[SharedFolder]([PostDataId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_SharedFolder_FolderId]
    ON [dbo].[SharedFolder]([FolderId] ASC);

