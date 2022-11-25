CREATE TABLE [dbo].[User] (
    [Id]                UNIQUEIDENTIFIER NOT NULL,
    [Name]              NVARCHAR (50)    NULL,
    [Type]              BIT              NULL,
    [Email]             NVARCHAR (150)   NULL,
    [CompanyId]         UNIQUEIDENTIFIER NULL,
    [AccessToken]       NVARCHAR (MAX)   NULL,
    [ExpiresOn]         DATETIME         NULL,
    [UserToken]         NVARCHAR (1000)  NULL,
    [ExtendedExpiresOn] DATETIME         NULL,
    [CreatedBy]         UNIQUEIDENTIFIER NULL,
    [CreateDate]        DATETIME         NULL,
    [UpdatedBy]         UNIQUEIDENTIFIER NULL,
    [UpdateDate]        DATETIME         NULL,
    [RefreshToken]      NVARCHAR (MAX)   NULL,
    [ShareSimpleToken]  NVARCHAR (MAX)   NULL,
    [IsActive]          BIT              NULL,
    [IsSuperAdmin]      BIT              NULL,
    [IsContactPerson]   BIT              NULL,
    [Language]          NVARCHAR (10)    NULL,
    [IsDeleted]         BIT              NULL,
    [DeletedTime]       DATETIME         NULL,
    CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Users_Company] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Company] ([Id])
);






GO
CREATE NONCLUSTERED INDEX [IX_User_CompanyId]
    ON [dbo].[User]([CompanyId] ASC);

