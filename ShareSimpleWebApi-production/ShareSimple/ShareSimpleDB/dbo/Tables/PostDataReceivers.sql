CREATE TABLE [dbo].[PostDataReceivers] (
    [Id]                   INT              IDENTITY (1, 1) NOT NULL,
    [ReceiverId]           UNIQUEIDENTIFIER NULL,
    [ReceiverEmail]        NVARCHAR (150)   NULL,
    [PostDataId]           UNIQUEIDENTIFIER NULL,
    [Otp]                  NVARCHAR (50)    NULL,
    [IsSavedDataGenerated] BIT              NULL,
    [OtpVerified]          BIT              NULL,
    [Submitted]            BIT              NULL,
    CONSTRAINT [PK_PostDataReceivers] PRIMARY KEY CLUSTERED ([Id] ASC)
);



