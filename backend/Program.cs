using DatasetCatalog.Api.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/datasets", () =>
{
    return Results.Ok(Array.Empty<Dataset>());
});

app.Run();


