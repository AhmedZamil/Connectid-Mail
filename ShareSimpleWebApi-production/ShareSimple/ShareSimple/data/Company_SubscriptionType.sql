ALTER TABLE [Company] ADD SubscriptionType	varchar(50)	NULL
/*UPGRADE*/
DECLARE @TrialDays INT=14
UPDATE [Company] SET SubscriptionType='Inactive' WHERE ISNULL(IsActive,0)=0 OR ISNULL(IsDeleted,0)=1
UPDATE [Company] SET SubscriptionType=CASE WHEN DATEDIFF(DAY, Created, GETUTCDATE()) > @TrialDays THEN 'Paid' ELSE 'Trial' END
WHERE NOT(ISNULL(IsActive,0)=0 OR ISNULL(IsDeleted,0)=1)

-- Company History
INSERT INTO CompanyHistory(Id, CompanyId, PrevStatus, StatusDate, [Status], Comment)
SELECT NEWID(), Id, NULL, Created, 'Trial', 'Created' FROM Company

INSERT INTO CompanyHistory(Id, CompanyId, PrevStatus, StatusDate, [Status], Comment)
SELECT NEWID(), Id, NULL, Updated, 'Inactive', NULL FROM Company WHERE ISNULL(IsActive,0)=0 OR ISNULL(IsDeleted,0)=1

INSERT INTO CompanyHistory(Id, CompanyId, PrevStatus, StatusDate, [Status], Comment)
SELECT NEWID(), Id, NULL, Created+@TrialDays+1, CASE WHEN DATEDIFF(DAY, Created, GETUTCDATE()) > @TrialDays THEN 'Paid' ELSE 'Trial' END, NULL 
FROM Company WHERE NOT(ISNULL(IsActive,0)=0 OR ISNULL(IsDeleted,0)=1)