CREATE TABLE [dbo].[ScheduledJobs] (
    [Id]              UNIQUEIDENTIFIER CONSTRAINT [DF_ScheduledJobs_Id] DEFAULT (newid()) NOT NULL,
    [CompanyId]       UNIQUEIDENTIFIER NOT NULL,
    [JobType]         SMALLINT         NOT NULL,
    [JobStatus]       SMALLINT         CONSTRAINT [DF_ScheduledJobs_JobStatus] DEFAULT ((0)) NOT NULL,
    [CreatedOn]       DATETIME         NOT NULL,
    [ExecuteOn]       DATETIME         NOT NULL,
    [ExecutedTime]    DATETIME         NULL,
    [ExecutionResult] VARCHAR (500)    NULL,
    CONSTRAINT [PK_ScheduledJobs] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ScheduledJobs_Company] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Company] ([Id])
);



