CREATE TABLE [dbo].[LogEvent] (
    [Id]        INT             IDENTITY (1, 1) NOT NULL,
    [Date]      DATETIME        NOT NULL,
    [Logger]    NVARCHAR (100)  NULL,
    [Message]   NVARCHAR (500)  NULL,
    [Exception] NVARCHAR (1000) NULL
);

