USE [master]
GO
/****** Object:  Database [sharesimpledb]    Script Date: 4/2/2019 6:30:05 PM ******/
CREATE DATABASE [sharesimpledb]
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sharesimpledb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [sharesimpledb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [sharesimpledb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [sharesimpledb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [sharesimpledb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [sharesimpledb] SET ARITHABORT OFF 
GO
ALTER DATABASE [sharesimpledb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [sharesimpledb] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [sharesimpledb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [sharesimpledb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [sharesimpledb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [sharesimpledb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [sharesimpledb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [sharesimpledb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [sharesimpledb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [sharesimpledb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [sharesimpledb] SET  ENABLE_BROKER 
GO
ALTER DATABASE [sharesimpledb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [sharesimpledb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [sharesimpledb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [sharesimpledb] SET ALLOW_SNAPSHOT_ISOLATION ON 
GO
ALTER DATABASE [sharesimpledb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [sharesimpledb] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [sharesimpledb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [sharesimpledb] SET RECOVERY FULL 
GO
ALTER DATABASE [sharesimpledb] SET  MULTI_USER 
GO
ALTER DATABASE [sharesimpledb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [sharesimpledb] SET DB_CHAINING OFF 
GO
USE [sharesimpledb]
GO
/****** Object:  Table [dbo].[AdminFolder]    Script Date: 4/2/2019 6:30:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminFolder](
	[Id] [uniqueidentifier] NOT NULL,
	[FolderName] [nvarchar](250) NULL,
	[CompanyId] [uniqueidentifier] NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_AdminFolder] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[AuditLog]    Script Date: 4/2/2019 6:30:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AuditLog](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostDataId] [uniqueidentifier] NULL,
	[ShareDataId] [uniqueidentifier] NULL,
	[SentDate] [datetime] NULL,
	[ReceivedDate] [datetime] NULL,
 CONSTRAINT [PK_AuditLog_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Company]    Script Date: 4/2/2019 6:30:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](150) NULL,
	[Address] [nvarchar](250) NULL,
	[PackageId] [uniqueidentifier] NULL,
	[Domain] [nvarchar](150) NULL,
	[LogoUrl] [nvarchar](250) NULL,
	[WebSite] [nvarchar](250) NULL,
	[CountryCode] [nvarchar](50) NULL,
	[City] [nvarchar](250) NULL,
	[PostalCode] [nvarchar](50) NULL,
	[Country] [nvarchar](250) NULL,
	[Cvr] [nvarchar](250) NULL,
	[Phone] [nvarchar](250) NULL,
	[IsOtpRequestdataView] [bit] NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Consent]    Script Date: 4/2/2019 6:30:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Consent](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NULL,
	[ConsentText] [text] NULL,
	[Type] [nvarchar](150) NULL,
	[IsActive] [bit] NULL,
	[CompanyId] [uniqueidentifier] NULL,
	[UserId] [uniqueidentifier] NULL,
	[Created] [datetime] NULL,
	[Updated] [datetime] NULL,
 CONSTRAINT [PK_Consent] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[FileMetaData]    Script Date: 4/2/2019 6:30:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FileMetaData](
	[FileId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](250) NULL,
	[Type] [nvarchar](250) NULL,
	[Size] [bigint] NULL,
	[FileUrl] [nvarchar](250) NULL,
	[ExpDate] [datetime] NULL,
	[FileFolder] [nvarchar](250) NULL,
	[IsDeleted] [bit] NULL,
	[DeletedDate] [datetime] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_FileMetaData] PRIMARY KEY CLUSTERED 
(
	[FileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Package]    Script Date: 4/2/2019 6:30:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Package](
	[Id] [uniqueidentifier] NOT NULL,
	[PackageName] [nvarchar](50) NULL,
	[Price] [decimal](18, 2) NULL,
	[TransactionPrice] [decimal](18, 2) NULL,
	[PriceUnit] [nvarchar](10) NULL,
 CONSTRAINT [PK_Package] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[PostData]    Script Date: 4/2/2019 6:30:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostData](
	[Id] [uniqueidentifier] NOT NULL,
	[SenderId] [uniqueidentifier] NULL,
	[SenderEmail] [nvarchar](50) NULL,
	[PostDataKey] [nvarchar](50) NULL,
	[Mode] [smallint] NULL,
	[SendDate] [datetime] NULL,
 CONSTRAINT [PK_PostData] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[PostDataField]    Script Date: 4/2/2019 6:30:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostDataField](
	[Id] [uniqueidentifier] NOT NULL,
	[FieldName] [nvarchar](150) NULL,
	[FieldType] [nvarchar](50) NULL,
	[FieldValue] [nvarchar](150) NULL,
	[PostDataId] [uniqueidentifier] NULL,
	[SendDate] [datetime] NULL,
	[ReceivedDate] [datetime] NULL,
 CONSTRAINT [PK_PostDataField] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[PostDataFieldValue]    Script Date: 4/2/2019 6:30:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostDataFieldValue](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FieldId] [uniqueidentifier] NULL,
	[FieldValue] [nvarchar](max) NULL,
	[ReceiverId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_PostDataFieldValue] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[PostDataFiles]    Script Date: 4/2/2019 6:30:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostDataFiles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FileId] [uniqueidentifier] NULL,
	[PostDataId] [uniqueidentifier] NULL,
	[PostDataFieldId] [uniqueidentifier] NULL,
	[Mode] [smallint] NULL,
	[ReceiverId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_PostDataFiles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[PostDataReceivers]    Script Date: 4/2/2019 6:30:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostDataReceivers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ReceiverId] [uniqueidentifier] NULL,
	[ReceiverEmail] [nvarchar](150) NULL,
	[PostDataId] [uniqueidentifier] NULL,
	[Otp] [nvarchar](50) NULL,
	[IsSavedDataGenerated] [bit] NULL,
 CONSTRAINT [PK_PostDataReceivers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[PriceCompany]    Script Date: 4/2/2019 6:30:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PriceCompany](
	[Id] [uniqueidentifier] NOT NULL,
	[TransactionPrice] [decimal](18, 2) NULL,
	[Price] [decimal](18, 2) NULL,
	[IsActive] [bit] NULL,
	[Created] [datetime] NULL,
	[Updated] [datetime] NULL,
	[PriceUnit] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[RequestDownload]    Script Date: 4/2/2019 6:30:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RequestDownload](
	[Id] [uniqueidentifier] NOT NULL,
	[ReceiverId] [uniqueidentifier] NULL,
	[RequestDate] [datetime] NULL,
	[SenderId] [uniqueidentifier] NULL,
	[DownloadKey] [nvarchar](50) NULL,
 CONSTRAINT [PK_RequestDownload] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[RequestDownLoadFiles]    Script Date: 4/2/2019 6:30:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RequestDownLoadFiles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RequestDownloadId] [uniqueidentifier] NULL,
	[FileMetadataId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_RequestDownLoadFiles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[ShareData]    Script Date: 4/2/2019 6:30:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShareData](
	[Id] [uniqueidentifier] NOT NULL,
	[SenderId] [uniqueidentifier] NULL,
	[SendDate] [datetime] NULL,
	[ReceivedDate] [datetime] NULL,
	[UploadKey] [nvarchar](150) NULL,
	[Mode] [smallint] NULL,
 CONSTRAINT [PK_UserFile] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[ShareDataFiles]    Script Date: 4/2/2019 6:30:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShareDataFiles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FileId] [uniqueidentifier] NULL,
	[ShareDataId] [uniqueidentifier] NULL,
	[Mode] [smallint] NULL,
 CONSTRAINT [PK_ShareDataFiles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[SharedFolder]    Script Date: 4/2/2019 6:30:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SharedFolder](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FolderId] [uniqueidentifier] NULL,
	[UserId] [uniqueidentifier] NULL,
	[SharedDate] [datetime] NULL,
	[IsGenerated] [bit] NULL,
	[PostDataId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_SharedFolder] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[SharedFolderFile]    Script Date: 4/2/2019 6:30:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SharedFolderFile](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FolderId] [uniqueidentifier] NULL,
	[FileId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_ShareFolderFile] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[ShareFileReceivers]    Script Date: 4/2/2019 6:30:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShareFileReceivers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ShareDataId] [uniqueidentifier] NULL,
	[ReceiverId] [uniqueidentifier] NULL,
	[ReceiverEmail] [nvarchar](50) NULL,
	[Mode] [smallint] NULL,
	[Otp] [nvarchar](50) NULL,
 CONSTRAINT [PK_ShareFileReceivers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[StorageConfig]    Script Date: 4/2/2019 6:30:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StorageConfig](
	[Id] [uniqueidentifier] NOT NULL,
	[StorageName] [nvarchar](250) NULL,
	[StorageConnectionString] [nvarchar](350) NULL,
	[StorageAccountName] [nvarchar](250) NULL,
	[StorageAccountKey] [nvarchar](150) NULL,
	[CompanyId] [uniqueidentifier] NULL,
	[FileAvailability] [int] NULL,
 CONSTRAINT [PK_StorageConfig] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[User]    Script Date: 4/2/2019 6:30:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Type] [bit] NULL,
	[Email] [nvarchar](150) NULL,
	[CompanyId] [uniqueidentifier] NULL,
	[AccessToken] [nvarchar](max) NULL,
	[ExpiresOn] [datetime] NULL,
	[UserToken] [nvarchar](1000) NULL,
	[ExtendedExpiresOn] [datetime] NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[RefreshToken] [nvarchar](max) NULL,
	[ShareSimpleToken] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsSuperAdmin] [bit] NULL,
	[IsContactPerson] [bit] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[UserHistory]    Script Date: 4/2/2019 6:30:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserHistory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [uniqueidentifier] NULL,
	[CompanyId] [uniqueidentifier] NULL,
	[ActivateDate] [datetime] NULL,
	[DeactivateDate] [datetime] NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_UserHistory] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
ALTER TABLE [dbo].[AdminFolder]  WITH CHECK ADD  CONSTRAINT [FK_AdminFolder_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([Id])
GO
ALTER TABLE [dbo].[AdminFolder] CHECK CONSTRAINT [FK_AdminFolder_Company]
GO
ALTER TABLE [dbo].[AuditLog]  WITH CHECK ADD  CONSTRAINT [FK_AuditLog_PostData] FOREIGN KEY([PostDataId])
REFERENCES [dbo].[PostData] ([Id])
GO
ALTER TABLE [dbo].[AuditLog] CHECK CONSTRAINT [FK_AuditLog_PostData]
GO
ALTER TABLE [dbo].[AuditLog]  WITH CHECK ADD  CONSTRAINT [FK_AuditLog_ShareData] FOREIGN KEY([ShareDataId])
REFERENCES [dbo].[ShareData] ([Id])
GO
ALTER TABLE [dbo].[AuditLog] CHECK CONSTRAINT [FK_AuditLog_ShareData]
GO
ALTER TABLE [dbo].[PostData]  WITH CHECK ADD  CONSTRAINT [FK_PostData_User1] FOREIGN KEY([SenderId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[PostData] CHECK CONSTRAINT [FK_PostData_User1]
GO
ALTER TABLE [dbo].[PostDataField]  WITH CHECK ADD  CONSTRAINT [FK_PostDataField_PostData] FOREIGN KEY([PostDataId])
REFERENCES [dbo].[PostData] ([Id])
GO
ALTER TABLE [dbo].[PostDataField] CHECK CONSTRAINT [FK_PostDataField_PostData]
GO
ALTER TABLE [dbo].[PostDataFieldValue]  WITH CHECK ADD  CONSTRAINT [FK_PostDataFieldValue_PostDataField] FOREIGN KEY([FieldId])
REFERENCES [dbo].[PostDataField] ([Id])
GO
ALTER TABLE [dbo].[PostDataFieldValue] CHECK CONSTRAINT [FK_PostDataFieldValue_PostDataField]
GO
ALTER TABLE [dbo].[PostDataFiles]  WITH CHECK ADD  CONSTRAINT [FK_PostDataFiles_FileMetaData] FOREIGN KEY([FileId])
REFERENCES [dbo].[FileMetaData] ([FileId])
GO
ALTER TABLE [dbo].[PostDataFiles] CHECK CONSTRAINT [FK_PostDataFiles_FileMetaData]
GO
ALTER TABLE [dbo].[PostDataFiles]  WITH CHECK ADD  CONSTRAINT [FK_PostDataFiles_PostData] FOREIGN KEY([PostDataId])
REFERENCES [dbo].[PostData] ([Id])
GO
ALTER TABLE [dbo].[PostDataFiles] CHECK CONSTRAINT [FK_PostDataFiles_PostData]
GO
ALTER TABLE [dbo].[PostDataFiles]  WITH CHECK ADD  CONSTRAINT [FK_PostDataFiles_PostDataFiles] FOREIGN KEY([PostDataFieldId])
REFERENCES [dbo].[PostDataField] ([Id])
GO
ALTER TABLE [dbo].[PostDataFiles] CHECK CONSTRAINT [FK_PostDataFiles_PostDataFiles]
GO
ALTER TABLE [dbo].[RequestDownload]  WITH CHECK ADD  CONSTRAINT [FK_RequestDownload_User] FOREIGN KEY([SenderId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[RequestDownload] CHECK CONSTRAINT [FK_RequestDownload_User]
GO
ALTER TABLE [dbo].[RequestDownLoadFiles]  WITH CHECK ADD  CONSTRAINT [FK_RequestDownLoadFiles_FileMetaData] FOREIGN KEY([FileMetadataId])
REFERENCES [dbo].[FileMetaData] ([FileId])
GO
ALTER TABLE [dbo].[RequestDownLoadFiles] CHECK CONSTRAINT [FK_RequestDownLoadFiles_FileMetaData]
GO
ALTER TABLE [dbo].[RequestDownLoadFiles]  WITH CHECK ADD  CONSTRAINT [FK_RequestDownLoadFiles_RequestDownload] FOREIGN KEY([RequestDownloadId])
REFERENCES [dbo].[RequestDownload] ([Id])
GO
ALTER TABLE [dbo].[RequestDownLoadFiles] CHECK CONSTRAINT [FK_RequestDownLoadFiles_RequestDownload]
GO
ALTER TABLE [dbo].[ShareData]  WITH CHECK ADD  CONSTRAINT [FK_UserFile_Users1] FOREIGN KEY([SenderId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[ShareData] CHECK CONSTRAINT [FK_UserFile_Users1]
GO
ALTER TABLE [dbo].[ShareDataFiles]  WITH CHECK ADD  CONSTRAINT [FK_ShareDataFiles_FileMetaData] FOREIGN KEY([FileId])
REFERENCES [dbo].[FileMetaData] ([FileId])
GO
ALTER TABLE [dbo].[ShareDataFiles] CHECK CONSTRAINT [FK_ShareDataFiles_FileMetaData]
GO
ALTER TABLE [dbo].[ShareDataFiles]  WITH CHECK ADD  CONSTRAINT [FK_ShareDataFiles_ShareData] FOREIGN KEY([ShareDataId])
REFERENCES [dbo].[ShareData] ([Id])
GO
ALTER TABLE [dbo].[ShareDataFiles] CHECK CONSTRAINT [FK_ShareDataFiles_ShareData]
GO
ALTER TABLE [dbo].[SharedFolder]  WITH CHECK ADD  CONSTRAINT [FK_SharedFolder_AdminFolder] FOREIGN KEY([FolderId])
REFERENCES [dbo].[AdminFolder] ([Id])
GO
ALTER TABLE [dbo].[SharedFolder] CHECK CONSTRAINT [FK_SharedFolder_AdminFolder]
GO
ALTER TABLE [dbo].[SharedFolder]  WITH CHECK ADD  CONSTRAINT [FK_SharedFolder_SharedFolder] FOREIGN KEY([PostDataId])
REFERENCES [dbo].[PostData] ([Id])
GO
ALTER TABLE [dbo].[SharedFolder] CHECK CONSTRAINT [FK_SharedFolder_SharedFolder]
GO
ALTER TABLE [dbo].[SharedFolder]  WITH CHECK ADD  CONSTRAINT [FK_SharedFolder_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[SharedFolder] CHECK CONSTRAINT [FK_SharedFolder_User]
GO
ALTER TABLE [dbo].[SharedFolderFile]  WITH CHECK ADD  CONSTRAINT [FK_ShareFolderFile_AdminFolder] FOREIGN KEY([FolderId])
REFERENCES [dbo].[AdminFolder] ([Id])
GO
ALTER TABLE [dbo].[SharedFolderFile] CHECK CONSTRAINT [FK_ShareFolderFile_AdminFolder]
GO
ALTER TABLE [dbo].[SharedFolderFile]  WITH CHECK ADD  CONSTRAINT [FK_ShareFolderFile_FileMetaData] FOREIGN KEY([FileId])
REFERENCES [dbo].[FileMetaData] ([FileId])
GO
ALTER TABLE [dbo].[SharedFolderFile] CHECK CONSTRAINT [FK_ShareFolderFile_FileMetaData]
GO
ALTER TABLE [dbo].[StorageConfig]  WITH CHECK ADD  CONSTRAINT [FK_StorageConfig_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([Id])
GO
ALTER TABLE [dbo].[StorageConfig] CHECK CONSTRAINT [FK_StorageConfig_Company]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_Users_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([Id])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_Users_Company]
GO
USE [master]
GO
ALTER DATABASE [sharesimpledb] SET  READ_WRITE 
GO

--Database Update for sotoring language info in user table.
ALTER TABLE [dbo].[User] ADD [Language] [nvarchar](10) NULL;
--Force all users to re-login.
UPDATE [dbo].[User] SET AccessToken = '', ShareSimpleToken = '';