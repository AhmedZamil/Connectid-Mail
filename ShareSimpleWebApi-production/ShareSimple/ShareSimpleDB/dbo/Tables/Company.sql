CREATE TABLE [dbo].[Company] (
    [Id]                   UNIQUEIDENTIFIER NOT NULL,
    [Name]                 NVARCHAR (150)   NULL,
    [Address]              NVARCHAR (250)   NULL,
    [PackageId]            UNIQUEIDENTIFIER NULL,
    [Domain]               NVARCHAR (150)   NULL,
    [LogoUrl]              NVARCHAR (250)   NULL,
    [WebSite]              NVARCHAR (250)   NULL,
    [CountryCode]          NVARCHAR (50)    NULL,
    [City]                 NVARCHAR (250)   NULL,
    [PostalCode]           NVARCHAR (50)    NULL,
    [Country]              NVARCHAR (250)   NULL,
    [Cvr]                  NVARCHAR (250)   NULL,
    [Phone]                NVARCHAR (250)   NULL,
    [IsOtpRequestdataView] BIT              NULL,
    [IsActive]             BIT              NULL,
    [IsDeleted]            BIT              NULL,
    [DeletedTime]          DATETIME         NULL,
    [Created]              DATETIME         NULL,
    [Updated]              DATETIME         NULL,
    [AutoRenewal]          BIT              NULL,
    [CrmId]                VARCHAR (50)     NULL,
    [EconomicId]           INT              NULL,
    [BillingStartDate]     DATETIME         NULL,
    [SubscriptionType]     VARCHAR (50)     NULL,
    [PromotionCode]        VARCHAR (50)     NULL,
    CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED ([Id] ASC)
);















