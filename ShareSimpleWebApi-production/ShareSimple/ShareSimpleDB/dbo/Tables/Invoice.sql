CREATE TABLE [dbo].[Invoice] (
    [Id]            UNIQUEIDENTIFIER CONSTRAINT [DF_Invoice_Id] DEFAULT (newid()) NOT NULL,
    [InvoiceDate]   DATETIME         NOT NULL,
    [CompanyId]     UNIQUEIDENTIFIER NOT NULL,
    [UserCount]     INT              NULL,
    [InvoiceRate]   DECIMAL (18, 2)  NULL,
    [InvoiceAmount] DECIMAL (18, 2)  NULL,
    [EconomicId]    INT              NULL,
    [IsSent]        BIT              NULL,
    [IsPaid]        BIT              CONSTRAINT [DF_Invoice_IsPaid] DEFAULT ((0)) NULL,
    [PaidDate]      DATETIME         NULL,
    CONSTRAINT [PK_Invoice] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Invoice_Company] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Company] ([Id])
);

