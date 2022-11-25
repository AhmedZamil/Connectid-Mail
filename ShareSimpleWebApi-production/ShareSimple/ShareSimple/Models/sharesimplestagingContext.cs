using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ShareSimple.Models
{
    public partial class SharesimplestagingContext : DbContext
    {
        public SharesimplestagingContext()
        {
        }

        public SharesimplestagingContext(DbContextOptions<SharesimplestagingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminFolder> AdminFolder { get; set; }
        public virtual DbSet<AuditLog> AuditLog { get; set; }
        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<CompanyHistory> CompanyHistory { get; set; }
        public virtual DbSet<Consent> Consent { get; set; }
        public virtual DbSet<FileMetaData> FileMetaData { get; set; }
        public virtual DbSet<Package> Package { get; set; }
        public virtual DbSet<PostData> PostData { get; set; }
        public virtual DbSet<PostDataField> PostDataField { get; set; }
        public virtual DbSet<PostDataFieldValue> PostDataFieldValue { get; set; }
        public virtual DbSet<PostDataFiles> PostDataFiles { get; set; }
        public virtual DbSet<PostDataReceivers> PostDataReceivers { get; set; }
        public virtual DbSet<PriceCompany> PriceCompany { get; set; }
        public virtual DbSet<RequestDownload> RequestDownload { get; set; }
        public virtual DbSet<RequestDownLoadFiles> RequestDownLoadFiles { get; set; }
        public virtual DbSet<ShareData> ShareData { get; set; }
        public virtual DbSet<ShareDataFiles> ShareDataFiles { get; set; }
        public virtual DbSet<SharedFolder> SharedFolder { get; set; }
        public virtual DbSet<SharedFolderFile> SharedFolderFile { get; set; }
        public virtual DbSet<ShareFileReceivers> ShareFileReceivers { get; set; }
        public virtual DbSet<StorageConfig> StorageConfig { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserHistory> UserHistory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:sharesimple20180718125305dbserver.database.windows.net,1433;Initial Catalog=sharesimple;Persist Security Info=False;User ID=ssadmin@sharesimple20180718125305dbserver;Password=Pass@123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminFolder>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.FolderName).HasMaxLength(250);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.AdminFolder)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_AdminFolder_Company");
            });

            modelBuilder.Entity<AuditLog>(entity =>
            {
                entity.Property(e => e.ReceivedDate).HasColumnType("datetime");

                entity.Property(e => e.SentDate).HasColumnType("datetime");

                entity.HasOne(d => d.PostData)
                    .WithMany(p => p.AuditLog)
                    .HasForeignKey(d => d.PostDataId)
                    .HasConstraintName("FK_AuditLog_PostData");

                entity.HasOne(d => d.ShareData)
                    .WithMany(p => p.AuditLog)
                    .HasForeignKey(d => d.ShareDataId)
                    .HasConstraintName("FK_AuditLog_ShareData");
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Address).HasMaxLength(250);

                entity.Property(e => e.City).HasMaxLength(250);

                entity.Property(e => e.Country).HasMaxLength(250);

                entity.Property(e => e.CountryCode).HasMaxLength(50);

                entity.Property(e => e.Cvr).HasMaxLength(250);

                entity.Property(e => e.Domain).HasMaxLength(150);

                entity.Property(e => e.LogoUrl).HasMaxLength(250);

                entity.Property(e => e.Name).HasMaxLength(150);

                entity.Property(e => e.Phone).HasMaxLength(250);

                entity.Property(e => e.PostalCode).HasMaxLength(50);

                entity.Property(e => e.WebSite).HasMaxLength(250);
            });
            modelBuilder.Entity<CompanyHistory>(entity =>
            {
                entity.Property(e => e.StatusDate).HasColumnType("datetime");
                entity.Property(e => e.PrevStatus).HasMaxLength(50);
                entity.Property(e => e.Status).HasMaxLength(50);
                entity.Property(e => e.Comment).HasMaxLength(500);
            });
            modelBuilder.Entity<Consent>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.ConsentText).HasColumnType("text");

                entity.Property(e => e.Created).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Type).HasMaxLength(150);

                entity.Property(e => e.Updated).HasColumnType("datetime");
            });

            modelBuilder.Entity<FileMetaData>(entity =>
            {
                entity.HasKey(e => e.FileId);

                entity.Property(e => e.FileId).ValueGeneratedNever();

                entity.Property(e => e.DeletedDate).HasColumnType("datetime");

                entity.Property(e => e.ExpDate).HasColumnType("datetime");

                entity.Property(e => e.FileFolder).HasMaxLength(250);

                entity.Property(e => e.FileUrl).HasMaxLength(250);

                entity.Property(e => e.Name).HasMaxLength(250);

                entity.Property(e => e.Type).HasMaxLength(250);
            });

            modelBuilder.Entity<Package>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.PackageName).HasMaxLength(50);

                entity.Property(e => e.PriceUnit).HasMaxLength(10);
            });

            modelBuilder.Entity<PostData>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.PostDataKey).HasMaxLength(50);

                entity.Property(e => e.SendDate).HasColumnType("datetime");

                entity.Property(e => e.SenderEmail).HasMaxLength(50);

                entity.HasOne(d => d.Sender)
                    .WithMany(p => p.PostData)
                    .HasForeignKey(d => d.SenderId)
                    .HasConstraintName("FK_PostData_User1");
            });

            modelBuilder.Entity<PostDataField>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.FieldName).HasMaxLength(150);

                entity.Property(e => e.FieldType).HasMaxLength(50);

                entity.Property(e => e.FieldValue).HasMaxLength(150);

                entity.Property(e => e.ReceivedDate).HasColumnType("datetime");

                entity.Property(e => e.SendDate).HasColumnType("datetime");

                entity.HasOne(d => d.PostData)
                    .WithMany(p => p.PostDataField)
                    .HasForeignKey(d => d.PostDataId)
                    .HasConstraintName("FK_PostDataField_PostData");
            });

            modelBuilder.Entity<PostDataFieldValue>(entity =>
            {
                entity.HasOne(d => d.Field)
                    .WithMany(p => p.PostDataFieldValue)
                    .HasForeignKey(d => d.FieldId)
                    .HasConstraintName("FK_PostDataFieldValue_PostDataField");
            });

            modelBuilder.Entity<PostDataFiles>(entity =>
            {
                entity.HasOne(d => d.File)
                    .WithMany(p => p.PostDataFiles)
                    .HasForeignKey(d => d.FileId)
                    .HasConstraintName("FK_PostDataFiles_FileMetaData");

                entity.HasOne(d => d.PostDataField)
                    .WithMany(p => p.PostDataFiles)
                    .HasForeignKey(d => d.PostDataFieldId)
                    .HasConstraintName("FK_PostDataFiles_PostDataFiles");

                entity.HasOne(d => d.PostData)
                    .WithMany(p => p.PostDataFiles)
                    .HasForeignKey(d => d.PostDataId)
                    .HasConstraintName("FK_PostDataFiles_PostData");
            });

            modelBuilder.Entity<PostDataReceivers>(entity =>
            {
                entity.Property(e => e.Otp).HasMaxLength(50);

                entity.Property(e => e.ReceiverEmail).HasMaxLength(150);
            });

            modelBuilder.Entity<PriceCompany>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Created).HasColumnType("datetime");

                entity.Property(e => e.PriceUnit).HasMaxLength(10);

                entity.Property(e => e.Updated).HasColumnType("datetime");
            });

            modelBuilder.Entity<RequestDownload>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DownloadKey).HasMaxLength(50);

                entity.Property(e => e.RequestDate).HasColumnType("datetime");

                entity.HasOne(d => d.Sender)
                    .WithMany(p => p.RequestDownload)
                    .HasForeignKey(d => d.SenderId)
                    .HasConstraintName("FK_RequestDownload_User");
            });

            modelBuilder.Entity<RequestDownLoadFiles>(entity =>
            {
                entity.HasOne(d => d.FileMetadata)
                    .WithMany(p => p.RequestDownLoadFiles)
                    .HasForeignKey(d => d.FileMetadataId)
                    .HasConstraintName("FK_RequestDownLoadFiles_FileMetaData");

                entity.HasOne(d => d.RequestDownload)
                    .WithMany(p => p.RequestDownLoadFiles)
                    .HasForeignKey(d => d.RequestDownloadId)
                    .HasConstraintName("FK_RequestDownLoadFiles_RequestDownload");
            });

            modelBuilder.Entity<ShareData>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.ReceivedDate).HasColumnType("datetime");

                entity.Property(e => e.SendDate).HasColumnType("datetime");

                entity.Property(e => e.UploadKey).HasMaxLength(150);

                entity.HasOne(d => d.Sender)
                    .WithMany(p => p.ShareData)
                    .HasForeignKey(d => d.SenderId)
                    .HasConstraintName("FK_UserFile_Users1");
            });

            modelBuilder.Entity<ShareDataFiles>(entity =>
            {
                entity.HasOne(d => d.File)
                    .WithMany(p => p.ShareDataFiles)
                    .HasForeignKey(d => d.FileId)
                    .HasConstraintName("FK_ShareDataFiles_FileMetaData");

                entity.HasOne(d => d.ShareData)
                    .WithMany(p => p.ShareDataFiles)
                    .HasForeignKey(d => d.ShareDataId)
                    .HasConstraintName("FK_ShareDataFiles_ShareData");
            });

            modelBuilder.Entity<SharedFolder>(entity =>
            {
                entity.Property(e => e.SharedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Folder)
                    .WithMany(p => p.SharedFolder)
                    .HasForeignKey(d => d.FolderId)
                    .HasConstraintName("FK_SharedFolder_AdminFolder");

                entity.HasOne(d => d.PostData)
                    .WithMany(p => p.SharedFolder)
                    .HasForeignKey(d => d.PostDataId)
                    .HasConstraintName("FK_SharedFolder_SharedFolder");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.SharedFolder)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_SharedFolder_User");
            });

            modelBuilder.Entity<SharedFolderFile>(entity =>
            {
                entity.HasOne(d => d.File)
                    .WithMany(p => p.SharedFolderFile)
                    .HasForeignKey(d => d.FileId)
                    .HasConstraintName("FK_ShareFolderFile_FileMetaData");

                entity.HasOne(d => d.Folder)
                    .WithMany(p => p.SharedFolderFile)
                    .HasForeignKey(d => d.FolderId)
                    .HasConstraintName("FK_ShareFolderFile_AdminFolder");
            });

            modelBuilder.Entity<ShareFileReceivers>(entity =>
            {
                entity.Property(e => e.Otp).HasMaxLength(50);

                entity.Property(e => e.ReceiverEmail).HasMaxLength(50);
            });

            modelBuilder.Entity<StorageConfig>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.StorageAccountKey).HasMaxLength(150);

                entity.Property(e => e.StorageAccountName).HasMaxLength(250);

                entity.Property(e => e.StorageConnectionString).HasMaxLength(350);

                entity.Property(e => e.StorageName).HasMaxLength(250);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.StorageConfig)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_StorageConfig_Company");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.Email).HasMaxLength(150);

                entity.Property(e => e.ExpiresOn).HasColumnType("datetime");

                entity.Property(e => e.ExtendedExpiresOn).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.UserToken).HasMaxLength(1000);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_Users_Company");
            });

            modelBuilder.Entity<UserHistory>(entity =>
            {
                entity.Property(e => e.ActivateDate).HasColumnType("datetime");

                entity.Property(e => e.DeactivateDate).HasColumnType("datetime");
            });
        }
    }
}
