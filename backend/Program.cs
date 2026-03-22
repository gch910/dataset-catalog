using DatasetCatalog.Api.Models;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigins =
    builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>()
    ?? [];

if (allowedOrigins.Length == 0)
{
    throw new InvalidOperationException(
        "No CORS origins configured. Set Cors:AllowedOrigins in appsettings or environment variables."
    );
}

builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("Frontend");

app.MapGet("/api/datasets", () =>
{
    return Results.Ok(Array.Empty<Dataset>());
});

app.Run();


