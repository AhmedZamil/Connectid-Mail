DECLARE @fromDate AS DATETIME  = '2019-07-01';

DECLARE @companyId uniqueidentifier ,@companyCreated DATETIME;

DECLARE company_cursor CURSOR FOR     
SELECT Id, Created FROM [dbo].[Company] WHERE Created > @fromDate;
  
OPEN company_cursor    
  
FETCH NEXT FROM company_cursor     
INTO @companyId,@companyCreated
  
WHILE @@FETCH_STATUS = 0    
BEGIN
	INSERT INTO [dbo].[ScheduledJobs] (CompanyId, JobType, CreatedOn, ExecuteOn)
	VALUES (@companyId, 0, @companyCreated, dateAdd(day, 1, @companyCreated));

	INSERT INTO [dbo].[ScheduledJobs] (CompanyId, JobType, CreatedOn, ExecuteOn)
	VALUES (@companyId, 1, @companyCreated, dateAdd(day, 3, @companyCreated));
      
    FETCH NEXT FROM company_cursor     
INTO @companyId,@companyCreated    
   
END     
CLOSE company_cursor;    
DEALLOCATE company_cursor; 