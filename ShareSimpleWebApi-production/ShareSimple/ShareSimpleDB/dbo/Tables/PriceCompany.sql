CREATE TABLE [dbo].[PriceCompany] (
    [Id]               UNIQUEIDENTIFIER NOT NULL,
    [TransactionPrice] DECIMAL (18, 2)  NULL,
    [Price]            DECIMAL (18, 2)  NULL,
    [Created]          DATETIME         NULL,
    [Updated]          DATETIME         NULL,
    [IsActive]         BIT              NULL,
    [PriceUnit]        NVARCHAR (10)    NULL,
    [CompanyId]        UNIQUEIDENTIFIER NULL,
    [EndDate]          DATETIME         NULL,
    CONSTRAINT [PK_PriceCompany] PRIMARY KEY CLUSTERED ([Id] ASC)
);



