export type DatasetStatus = 'Approved' | 'NeedsReview' | 'Rejected';

export interface Dataset {
    name: string;
    domain: string;
    owner: string;
    qualityScore: number;
    status: DatasetStatus;
}

export interface CreateDatasetFormValues {
    name: string;
    domain: string;
    owner: string;
    qualityScore: string;
    status: DatasetStatus;
}
