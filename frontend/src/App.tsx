import { useEffect, useState } from 'react';
import { getDatasets } from './api/datasets';
import type { Dataset } from './types/dataset';

const App = () => {
    const [datasets, setDatasets] = useState<Dataset[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDatasets();
                setDatasets(data);
            } catch {
                setError('Failed to load datasets');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Dataset Catalog</h1>
            {datasets.length === 0 ? (
                <p>No datasets yet. Create one to get started.</p>
            ) : (
                <ul>
                    {datasets.map((dataset) => (
                        <li key={`${dataset.name}-${dataset.owner}`}>
                            {dataset.name} - {dataset.domain} - {dataset.status}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
