using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;
using ShareSimple.Common;
using ShareSimple.Common.eConomic;
using ShareSimple.Common.Services;
using ShareSimple.Common.WebCRM;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.Repository;
using System.Globalization;
using System.IO;

namespace ShareSimple
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.Configure<FormOptions>(x =>
            {
                x.ValueLengthLimit = int.MaxValue;
                x.MultipartBodyLengthLimit = int.MaxValue;
                x.MultipartHeadersLengthLimit = int.MaxValue;
            });

            services.Configure<AzureAdClientSettings>(Configuration.GetSection(nameof(AzureAdClientSettings)));

            services.AddMvc((options) =>
            {
                options.Filters.Add(typeof(Filters.SurveillanceFilter));
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Connectid Mail APIs", Version = "v1" });
                c.OperationFilter<AddRequiredHeaderParameter>();
            });
            services.AddSingleton<IConfiguration>(Configuration);

            services.AddDbContext<SharesimpleContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ShareSampleDatabase")));
            services.Configure<EconomicSettings>(Configuration.GetSection(nameof(EconomicSettings)));
            services.AddTransient<IEconomicService, EconomicService>();
            services.Configure<WebCrmSettings>(Configuration.GetSection(nameof(WebCrmSettings)));
            services.AddTransient<IWebCrmService, WebCrmService>();
            services.Configure<LinkConfig>(Configuration.GetSection(nameof(LinkConfig)));
            services.Configure<OnDemandDataConfig>(Configuration.GetSection("DefaultDataId"));
            services.AddTransient<ShareSimpleConfiguration, ShareSimpleConfiguration>();
            services.AddTransient<EmailManager, EmailManager>();
            // Read smtp settings
            services.Configure<EmailConfig>(Configuration.GetSection(nameof(EmailConfig)));
            services.AddTransient<IEmailService, EmailService>();
            services.Configure<SmsSettings>(Configuration.GetSection(nameof(SmsSettings)));
            services.AddTransient<ISmsService, SmsService>();
            services.AddTransient<IMsgBuilder, MsgBuilder>();
            services.Configure<SurveillanceSettings>(Configuration.GetSection(nameof(SurveillanceSettings)));
            services.AddScoped<ISurveillanceRepository, SurveillanceRepository>(serviceProvider =>
             new SurveillanceRepository(serviceProvider.GetService<SharesimpleContext>(), serviceProvider.GetService< ShareSimpleConfiguration>(), serviceProvider.GetService<IEmailService>()));
            services.AddScoped<ICompanyRepository, CompanyRepository>(serviceProvider =>
                                new CompanyRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<ICompanyHistoryRepository, CompanyHistoryRepository>(serviceProvider =>
                                new CompanyHistoryRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IStorageConfigRepository, StorageConfigRepository>(serviceProvider =>
                               new StorageConfigRepository(serviceProvider.GetService<SharesimpleContext>()));
            // user
            services.AddScoped<IUserRepository, UserRepository>(serviceProvider =>
                                new UserRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IUserHistoryRepository, UserHistoryRepository>(serviceProvider =>
                               new UserHistoryRepository(serviceProvider.GetService<SharesimpleContext>()));

            services.AddScoped<IFileRepository, FileRepository>(serviceProvider =>
                                new FileRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IShareDataRepository, ShareDataRepository>(serviceProvider =>
                                new ShareDataRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IShareDataFilesRepository, ShareDataFilesRepository>(serviceProvider =>
                                new ShareDataFilesRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IShareFileReceiverRepository, ShareFileReceiverRepository>(serviceProvider =>
                                new ShareFileReceiverRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IRequestDownloadRepository, RequestDownloadRepository>(serviceProvider =>
                                new RequestDownloadRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IRequestDownLoadFilesRepository, RequestDownLoadFilesRepository>(serviceProvider =>
                                new RequestDownLoadFilesRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IPackageRepository, PackageRepository>(serviceProvider =>
                                new PackageRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IPriceCompanyRepository, PriceCompanyRepository>(serviceProvider =>
                               new PriceCompanyRepository(serviceProvider.GetService<SharesimpleContext>()));
            //postdata
            services.AddScoped<IPostDataRepository, PostDataRepository>(serviceProvider =>
                                new PostDataRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IPostDataFieldRepository, PostDataFieldRepository>(serviceProvider =>
                                new PostDataFieldRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IPostDataFilesRepository, PostDataFilesRepository>(serviceProvider =>
                                new PostDataFilesRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IPostDataReceiverRepository, PostDataReceiverRepository>(serviceProvider =>
                                new PostDataReceiverRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IPostDataFieldValueRepository, PostDataFieldValueRepository>(serviceProvider =>
                               new PostDataFieldValueRepository(serviceProvider.GetService<SharesimpleContext>()));
            //consent
            services.AddScoped<IConsentRepository, ConsentRepository>(serviceProvider =>
                                new ConsentRepository(serviceProvider.GetService<SharesimpleContext>()));
            //shared folders
            services.AddScoped<IAdminFolderRepository, AdminFolderRepository>(serviceProvider =>
                new AdminFolderRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<ISharedFolderRepository, SharedFolderRepository>(serviceProvider =>
                new SharedFolderRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<ISharedFolderFileRepository, SharedFolderFileRepository>(serviceProvider =>
                new SharedFolderFileRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IInvoiceRepository, InvoiceRepository>(serviceProvider =>
             new InvoiceRepository(serviceProvider.GetService<SharesimpleContext>()));

            services.AddScoped<IScheduledJobRepository, ScheduledJobRepository>(serviceProvider =>
             new ScheduledJobRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<ITokenInfoRepository, TokenInfoRepository>(serviceProvider =>
             new TokenInfoRepository(serviceProvider.GetService<SharesimpleContext>()));
            services.AddScoped<IOtpRepository, OtpRepository>(serviceProvider =>
             new OtpRepository(serviceProvider.GetService<SharesimpleContext>()));

            //Filter 
            //services.AddScoped<ITokenManager, TokenManager>(serviceProvider => new TokenManager(serviceProvider.GetService<UserRepository>()));
            services.AddScoped<AuthAttribute>();
            services.AddScoped<SuperAdminAttribute>();
            services.AddScoped<SchedulerJobAttribute>();

            services.AddLocalization(o => o.ResourcesPath = "Resources");
            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new[]
                {
                    new CultureInfo("en-US"),
                    new CultureInfo("en-GB"),
                    new CultureInfo("de-DE")
                };
                options.DefaultRequestCulture = new RequestCulture("en-US", "en-US");

                // You must explicitly state which cultures your application supports.
                // These are the cultures the app supports for formatting 
                // numbers, dates, etc.

                options.SupportedCultures = supportedCultures;

                // These are the cultures the app supports for UI strings, 
                // i.e. we have localized resources for.

                options.SupportedUICultures = supportedCultures;
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });

            //DefaultFilesOptions options = new DefaultFilesOptions();
            //options.DefaultFileNames.Clear();
            //options.DefaultFileNames.Add("index.html");
            //app.UseDefaultFiles(options);

            var provider = new FileExtensionContentTypeProvider();
            // Add new mappings
            provider.Mappings[".myapp"] = "application/x-msdownload";
            provider.Mappings[".htm3"] = "text/html";
            provider.Mappings[".image"] = "image/png";
            provider.Mappings[".odt"] = "application/vnd.oasis.opendocument.text";
            provider.Mappings["..ods"] = "application / oleobject";

            // Replace an existing mapping
            //provider.Mappings[".rtf"] = "application/x-msdownload";
            // Remove MP4 videos.
            provider.Mappings.Remove(".mp4");

            app.UseDefaultFiles();

            app.UseStaticFiles(new StaticFileOptions
            {
                //FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dist"))
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
                ContentTypeProvider = provider
            });

            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Connectid Mail APIs V1");
            });
        }


    }
}
