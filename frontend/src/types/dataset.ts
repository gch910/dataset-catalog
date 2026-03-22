export type DatasetStatus = 'Approved' | 'NeedsReview' | 'Rejected';

export interface Dataset {
    name: string;
    domain: string;
    owner: string;
    qualityScore: number;
    status: DatasetStatus;
}

export type CreateDatasetInput = Dataset;
