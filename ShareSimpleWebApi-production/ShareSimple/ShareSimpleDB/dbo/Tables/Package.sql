CREATE TABLE [dbo].[Package] (
    [Id]               UNIQUEIDENTIFIER NOT NULL,
    [PackageName]      NVARCHAR (50)    NULL,
    [Price]            DECIMAL (18, 2)  NULL,
    [TransactionPrice] DECIMAL (18, 2)  NULL,
    [PriceUnit]        NVARCHAR (10)    NULL,
    CONSTRAINT [PK_Package] PRIMARY KEY CLUSTERED ([Id] ASC)
);

