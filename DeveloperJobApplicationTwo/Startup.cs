using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeveloperJobApplicationTwo.DB;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DeveloperJobApplicationTwo
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
            this.HostingEnviornment = env;
            IConfigurationBuilder builder = CreateConfigurationBuilder(env);
            Configuration = builder.Build();


        }

        private static IConfigurationBuilder CreateConfigurationBuilder(IHostingEnvironment env)
        {
            return new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
        }

        private string getMyConnectionString()
        {
            var myConnectiongString = this.Configuration["Database:ConnectionString"];
          return myConnectiongString;
        }

        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnviornment { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var en = this.HostingEnviornment;
           
            services.AddMvc();

            //var connectingString = @"Server=SAROJ-PC;Database=DeveloperJob;Trusted_Connection=True;";
            var connectingString = getMyConnectionString();

            services.AddOptions();

            

            
           

            services.AddDbContext<DeveloperJobContext>(options => options.UseSqlServer(connectingString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
