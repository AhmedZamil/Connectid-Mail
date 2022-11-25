CREATE TABLE [dbo].[Surveillance] (
    [Id]            UNIQUEIDENTIFIER CONSTRAINT [DF_Surveillance_Id] DEFAULT (newid()) NOT NULL,
    [LogTime]       DATETIME         CONSTRAINT [DF_Surveillance_LogTime] DEFAULT (getutcdate()) NULL,
    [ActionName]    VARCHAR (50)     NULL,
    [LogMessage]    NVARCHAR (MAX)   NULL,
    [MessageType]   VARCHAR (50)     NULL,
    [Severity]      INT              NULL,
    [Result]        VARCHAR (MAX)    NULL,
    [EntityName]    VARCHAR (50)     NULL,
    [OldObject]     NVARCHAR (MAX)   NULL,
    [NewObject]     NVARCHAR (MAX)   NULL,
    [ModuleName]    VARCHAR (50)     NULL,
    [SubModuleName] VARCHAR (50)     NULL,
    [MachineName]   VARCHAR (50)     NULL,
    [MachineIP]     VARCHAR (50)     NULL,
    [UserAgent]     VARCHAR (500)    NULL,
    [AppVersion]    VARCHAR (50)     NULL,
    [UserId]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_Surveillance] PRIMARY KEY CLUSTERED ([Id] ASC)
);

