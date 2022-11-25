CREATE TABLE [dbo].[PostDataFieldValue] (
    [Id]         INT              IDENTITY (1, 1) NOT NULL,
    [FieldId]    UNIQUEIDENTIFIER NULL,
    [FieldValue] NVARCHAR (MAX)   NULL,
    [ReceiverId] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_PostDataFieldValue] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_PostDataFieldValue_PostDataField] FOREIGN KEY ([FieldId]) REFERENCES [dbo].[PostDataField] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_PostDataFieldValue_FieldId]
    ON [dbo].[PostDataFieldValue]([FieldId] ASC);

