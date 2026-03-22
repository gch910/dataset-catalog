namespace DatasetCatalog.Api.Models;

public record Dataset(
    string Name,
    string Domain,
    string Owner,
    int QualityScore,
    string Status
);