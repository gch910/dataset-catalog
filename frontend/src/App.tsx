import { useEffect, useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { getDatasets } from './api/datasets';
import type { Dataset, DatasetStatus } from './types/dataset';
import PageHeader from './components/PageHeader/PageHeader';
import DatasetFilters from './components/DatasetFilters/DatasetFilters';
import DatasetList from './components/DatasetList/DatasetList';
import CreateDatasetModal from './components/CreateDatasetModal/CreateDatasetModal';

const App = () => {
    const [datasets, setDatasets] = useState<Dataset[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const [selectedDomain, setSelectedDomain] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<DatasetStatus | ''>(
        '',
    );

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

    const handleCreateDataset = (dataset: Dataset) => {
        setDatasets((current) => [dataset, ...current]);
    };

    const availableDomains = Array.from(new Set(datasets.map((d) => d.domain)));

    const filteredDatasets = datasets.filter((dataset) => {
        const matchesDomain =
            selectedDomain === '' || dataset.domain === selectedDomain;

        const matchesStatus =
            selectedStatus === '' || dataset.status === selectedStatus;

        return matchesDomain && matchesStatus;
    });

    if (loading) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography>Loading...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography color="error">{error}</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Stack spacing={3}>
                <PageHeader onOpenCreateModal={openCreateModal} />

                <DatasetFilters
                    domain={selectedDomain}
                    status={selectedStatus}
                    onDomainChange={setSelectedDomain}
                    onStatusChange={setSelectedStatus}
                    availableDomains={availableDomains}
                />

                <DatasetList datasets={filteredDatasets} />

                <CreateDatasetModal
                    isOpen={isCreateModalOpen}
                    onClose={closeCreateModal}
                    onCreateDataset={handleCreateDataset}
                />
            </Stack>
        </Container>
    );
};

export default App;
