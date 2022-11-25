CREATE TABLE [dbo].[CompanyHistory] (
    [Id]         UNIQUEIDENTIFIER CONSTRAINT [DF_CompanyHistory_Id] DEFAULT (newid()) NOT NULL,
    [CompanyId]  UNIQUEIDENTIFIER NULL,
    [PrevStatus] VARCHAR (50)     NULL,
    [StatusDate] DATETIME         NULL,
    [Status]     VARCHAR (50)     NULL,
    [Comment]    VARCHAR (500)    NULL,
    CONSTRAINT [PK_CompanyHistory] PRIMARY KEY CLUSTERED ([Id] ASC)
);

