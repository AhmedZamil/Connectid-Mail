CREATE TABLE [dbo].[UserHistory] (
    [Id]             INT              IDENTITY (1, 1) NOT NULL,
    [UserId]         UNIQUEIDENTIFIER NULL,
    [CompanyId]      UNIQUEIDENTIFIER NULL,
    [ActivateDate]   DATETIME         NULL,
    [DeactivateDate] DATETIME         NULL,
    [IsActive]       BIT              NULL,
    CONSTRAINT [PK_UserHistory] PRIMARY KEY CLUSTERED ([Id] ASC)
);

