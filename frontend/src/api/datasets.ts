import type { Dataset } from '../types/dataset';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getDatasets = async (): Promise<Dataset[]> => {
    const response = await fetch(`${baseUrl}/api/datasets`);

    if (!response.ok) {
        throw new Error('Failed to fetch datasets');
    }

    return response.json();
};
