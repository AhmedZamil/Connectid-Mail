CREATE TABLE [dbo].[AdminFolder] (
    [Id]         UNIQUEIDENTIFIER NOT NULL,
    [FolderName] NVARCHAR (250)   NULL,
    [CompanyId]  UNIQUEIDENTIFIER NULL,
    [CreateDate] DATETIME         NULL,
    [UpdateDate] DATETIME         NULL,
    [IsDeleted]  BIT              NULL,
    CONSTRAINT [PK_AdminFolder] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_AdminFolder_Company] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Company] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_AdminFolder_CompanyId]
    ON [dbo].[AdminFolder]([CompanyId] ASC);

