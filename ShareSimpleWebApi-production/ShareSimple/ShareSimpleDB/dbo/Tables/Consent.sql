CREATE TABLE [dbo].[Consent] (
    [Id]          UNIQUEIDENTIFIER NOT NULL,
    [Name]        NVARCHAR (50)    NULL,
    [ConsentText] TEXT             NULL,
    [Type]        NVARCHAR (150)   NULL,
    [IsActive]    BIT              NULL,
    [CompanyId]   UNIQUEIDENTIFIER NULL,
    [UserId]      UNIQUEIDENTIFIER NULL,
    [Created]     DATETIME         NULL,
    [Updated]     DATETIME         NULL,
    CONSTRAINT [PK_Consent] PRIMARY KEY CLUSTERED ([Id] ASC)
);

