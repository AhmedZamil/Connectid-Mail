CREATE TABLE [dbo].[Surveillance](
	[Id] [uniqueidentifier] NOT NULL,
	[LogTime] [datetime] NULL,
	[ActionName] [varchar](50) NULL,
	[LogMessage] [nvarchar](max) NULL,
	[MessageType] [varchar](50) NULL,
	[Severity] [int] NULL,
	[Result] [varchar](max) NULL,
	[EntityName] [varchar](50) NULL,
	[OldObject] [nvarchar](max) NULL,
	[NewObject] [nvarchar](max) NULL,
	[ModuleName] [varchar](50) NULL,
	[SubModuleName] [varchar](50) NULL,
	[MachineName] [varchar](50) NULL,
	[MachineIP] [varchar](50) NULL,
	[UserAgent] [varchar](500) NULL,
	[AppVersion] [varchar](50) NULL,
	[UserId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Surveillance] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[Surveillance] ADD  CONSTRAINT [DF_Surveillance_Id]  DEFAULT (newid()) FOR [Id]
GO

ALTER TABLE [dbo].[Surveillance] ADD  CONSTRAINT [DF_Surveillance_LogTime]  DEFAULT (getutcdate()) FOR [LogTime]
GO
