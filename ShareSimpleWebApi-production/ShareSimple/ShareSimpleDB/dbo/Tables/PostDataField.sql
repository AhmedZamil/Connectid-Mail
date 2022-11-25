CREATE TABLE [dbo].[PostDataField] (
    [Id]           UNIQUEIDENTIFIER NOT NULL,
    [FieldName]    NVARCHAR (150)   NULL,
    [FieldType]    NVARCHAR (50)    NULL,
    [FieldValue]   NVARCHAR (150)   NULL,
    [PostDataId]   UNIQUEIDENTIFIER NULL,
    [SendDate]     DATETIME         NULL,
    [ReceivedDate] DATETIME         NULL,
    CONSTRAINT [PK_PostDataField] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_PostDataField_PostData] FOREIGN KEY ([PostDataId]) REFERENCES [dbo].[PostData] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_PostDataField_PostDataId]
    ON [dbo].[PostDataField]([PostDataId] ASC);

