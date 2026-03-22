import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
} from '@mui/material';
import type { DatasetStatus } from '../../types/dataset';

interface DatasetFiltersProps {
    domain: string;
    status: DatasetStatus | '';
    onDomainChange: (value: string) => void;
    onStatusChange: (value: DatasetStatus | '') => void;
    availableDomains: string[];
}

const DatasetFilters = ({
    domain,
    status,
    onDomainChange,
    onStatusChange,
    availableDomains,
}: DatasetFiltersProps) => {
    return (
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="domain-filter-label">Domain</InputLabel>
                <Select
                    labelId="domain-filter-label"
                    value={domain}
                    label="Domain"
                    onChange={(e) => onDomainChange(e.target.value)}
                >
                    <MenuItem value="">All</MenuItem>
                    {availableDomains.map((d) => (
                        <MenuItem key={d} value={d}>
                            {d}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="status-filter-label">Status</InputLabel>
                <Select
                    labelId="status-filter-label"
                    value={status}
                    label="Status"
                    onChange={(e) =>
                        onStatusChange(e.target.value as DatasetStatus | '')
                    }
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="NeedsReview">NeedsReview</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
};

export default DatasetFilters;
