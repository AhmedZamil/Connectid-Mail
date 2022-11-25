CREATE TABLE [dbo].[PostData] (
    [Id]          UNIQUEIDENTIFIER NOT NULL,
    [SenderId]    UNIQUEIDENTIFIER NULL,
    [SenderEmail] NVARCHAR (50)    NULL,
    [PostDataKey] NVARCHAR (50)    NULL,
    [Mode]        SMALLINT         NULL,
    [SendDate]    DATETIME         NULL,
    CONSTRAINT [PK_PostData] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_PostData_User1] FOREIGN KEY ([SenderId]) REFERENCES [dbo].[User] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_PostData_SenderId]
    ON [dbo].[PostData]([SenderId] ASC);

