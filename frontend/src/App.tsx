import { useEffect, useState } from 'react';
import { getDatasets } from './api/datasets';
import type { Dataset } from './types/dataset';
import PageHeader from './components/PageHeader/PageHeader';
import DatasetFilters from './components/DatasetFilters/DatasetFilters';
import DatasetList from './components/DatasetList/DatasetList';
import CreateDatasetModal from './components/CreateDatasetModal/CreateDatasetModal';

const App = () => {
    const [datasets, setDatasets] = useState<Dataset[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

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

    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <main>
            <PageHeader onCreateDataset={openCreateModal} />
            <DatasetFilters />
            <DatasetList datasets={datasets} />
            <CreateDatasetModal
                isOpen={isCreateModalOpen}
                onClose={closeCreateModal}
            />
        </main>
    );
};

export default App;
