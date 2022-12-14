
ALTER TABLE [dbo].[Company] ADD [AutoRenewal] [BIT] NULL;
ALTER TABLE [dbo].[Company] ADD [IsActive] [BIT] NULL;
ALTER TABLE [dbo].[Company] ADD [IsDeleted] [BIT] NULL;
ALTER TABLE [dbo].[Company] ADD [DeletedTime] [datetime] NULL;
ALTER TABLE [dbo].[Company] ADD [Created] [datetime] NULL;
ALTER TABLE [dbo].[Company] ADD [Updated] [datetime] NULL;
ALTER TABLE [dbo].[Company] ADD [CrmId] varchar(50) NULL;
ALTER TABLE [dbo].[Company] ADD [EconomicId] INT NULL;
ALTER TABLE [dbo].[Company] ADD [BillingStartDate] [datetime] NULL;

ALTER TABLE [dbo].[PriceCompany] ADD [CompanyId] [uniqueidentifier] NULL;
ALTER TABLE [dbo].[PriceCompany] ADD [EndDate] [datetime] NULL;

--SELECT * FROM [dbo].[PriceCompany] WHERE Id IN (SELECT PackageId FROM Company)
--DELETE FROM [dbo].[PriceCompany] WHERE Id NOT IN (SELECT PackageId FROM Company)

UPDATE PriceCompany SET PriceCompany.CompanyId = Company.Id FROM PriceCompany INNER JOIN Company ON PriceCompany.Id = Company.PackageId WHERE PriceCompany.CompanyId IS NULL
--DELETE FROM [dbo].[PriceCompany] WHERE CompanyId IS NULL

--SELECT PriceCompany.Created, PriceCompany.Updated FROM PriceCompany INNER JOIN Company ON PriceCompany.Id = Company.PackageId WHERE Company.Created IS NULL
UPDATE Company SET IsActive = 1
UPDATE Company SET 
	Company.Created = PriceCompany.Created,
	Company.Updated = PriceCompany.Created
 FROM PriceCompany INNER JOIN Company ON PriceCompany.Id = Company.PackageId WHERE Company.Created IS NULL

UPDATE [dbo].[Company]
SET BillingStartDate = DATEADD(DAY, 15, Created)
WHERE DATEDIFF(day, Created,  GETUTCDATE()) > 15 AND BillingStartDate IS NULL

--Finally The field PackageId column should be removed from company table.

--UPDATE c SET  c.IsActive = 0,c.IsDeleted = 1, c.AutoRenewal = 1, c.DeletedTime = GETUTCDATE() FROM [dbo].[Company] c WHERE (SELECT COUNT(*) FROM [dbo].[User] u WHERE u.CompanyId = c.Id) = 0

--Invoice table
CREATE TABLE Invoice(
	[Id] [uniqueidentifier] NOT NULL,
	[InvoiceDate] [datetime] NOT NULL,
	[CompanyId] [uniqueidentifier] NOT NULL,
	[UserCount] [int] NULL,
	[InvoiceRate] [decimal](18, 2) NULL,
	[InvoiceAmount] [decimal](18, 2) NULL,
	[EconomicId] [int] NULL,
	[IsSent] [bit] NULL,
	[IsPaid] [bit] NULL,
	[PaidDate] [datetime] NULL,
 CONSTRAINT [PK_Invoice] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[Invoice] ADD  CONSTRAINT [DF_Invoice_Id]  DEFAULT (newid()) FOR [Id]
GO

ALTER TABLE [dbo].[Invoice] ADD  CONSTRAINT [DF_Invoice_IsPaid]  DEFAULT ((0)) FOR [IsPaid]
GO

ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD  CONSTRAINT [FK_Invoice_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([Id])
GO

ALTER TABLE [dbo].[Invoice] CHECK CONSTRAINT [FK_Invoice_Company]
GO
