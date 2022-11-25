CREATE TABLE [dbo].[CompanyHistory](
	[Id] [uniqueidentifier] NOT NULL,
	[CompanyId] [uniqueidentifier] NULL,
	[PrevStatus] [varchar](50) NULL,
	[StatusDate] [datetime] NULL,
	[Status] [varchar](50) NULL,
	[Comment] [varchar](500) NULL,
 CONSTRAINT [PK_CompanyHistory] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[CompanyHistory] ADD  CONSTRAINT [DF_CompanyHistory_Id]  DEFAULT (newid()) FOR [Id]
GO

