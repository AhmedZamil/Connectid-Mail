CREATE TABLE [dbo].[TokenInfo] (
    [AppToken]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedTime]  DATETIME         CONSTRAINT [DF_TokenInfo_CreatedTime] DEFAULT (getutcdate()) NULL,
    [ModifiedTime] DATETIME         NULL,
    [AccessToken]  VARCHAR (1000)   NULL,
    [RefreshToken] VARCHAR (1000)   NULL,
    [TokenType]    VARCHAR (50)     NULL,
    [ExpiresIn]    INT              NULL,
    CONSTRAINT [PK_TokenInfo] PRIMARY KEY CLUSTERED ([AppToken] ASC)
);

