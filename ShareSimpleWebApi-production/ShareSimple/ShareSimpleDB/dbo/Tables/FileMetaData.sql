CREATE TABLE [dbo].[FileMetaData] (
    [FileId]      UNIQUEIDENTIFIER NOT NULL,
    [Name]        NVARCHAR (250)   NULL,
    [Type]        NVARCHAR (250)   NULL,
    [Size]        BIGINT           NULL,
    [FileUrl]     NVARCHAR (250)   NULL,
    [ExpDate]     DATETIME         NULL,
    [FileFolder]  NVARCHAR (250)   NULL,
    [IsDeleted]   BIT              NULL,
    [DeletedDate] DATETIME         NULL,
    [CreatedDate] DATETIME         NULL,
    CONSTRAINT [PK_FileMetaData] PRIMARY KEY CLUSTERED ([FileId] ASC)
);

