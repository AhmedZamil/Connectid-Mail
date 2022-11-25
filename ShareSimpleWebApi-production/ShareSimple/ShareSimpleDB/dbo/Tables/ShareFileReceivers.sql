CREATE TABLE [dbo].[ShareFileReceivers] (
    [Id]            INT              IDENTITY (1, 1) NOT NULL,
    [ShareDataId]   UNIQUEIDENTIFIER NULL,
    [ReceiverId]    UNIQUEIDENTIFIER NULL,
    [ReceiverEmail] NVARCHAR (50)    NULL,
    [Mobile]        NVARCHAR (20)    NULL,
    [Mode]          SMALLINT         NULL,
    [Otp]           NVARCHAR (50)    NULL,
    CONSTRAINT [PK_ShareFileReceivers] PRIMARY KEY CLUSTERED ([Id] ASC)
);

