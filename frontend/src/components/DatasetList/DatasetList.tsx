import type { Dataset } from '../../types/dataset';

interface DatasetListProps {
    datasets: Dataset[];
}

const DatasetList = ({ datasets }: DatasetListProps) => {
    if (datasets.length === 0) {
        return <p>No datasets yet. Create one to get started.</p>;
    }

    return (
        <ul>
            {datasets.map((dataset) => (
                <li key={`${dataset.name}-${dataset.owner}`}>
                    {dataset.name} - {dataset.domain} - {dataset.status}
                </li>
            ))}
        </ul>
    );
};

export default DatasetList;
