CREATE TABLE [dbo].[StorageConfig] (
    [Id]                      UNIQUEIDENTIFIER NOT NULL,
    [StorageName]             NVARCHAR (250)   NULL,
    [StorageConnectionString] NVARCHAR (350)   NULL,
    [StorageAccountName]      NVARCHAR (250)   NULL,
    [StorageAccountKey]       NVARCHAR (150)   NULL,
    [CompanyId]               UNIQUEIDENTIFIER NULL,
    [FileAvailability]        INT              NULL,
    CONSTRAINT [PK_StorageConfig] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_StorageConfig_Company] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Company] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_StorageConfig_CompanyId]
    ON [dbo].[StorageConfig]([CompanyId] ASC);

