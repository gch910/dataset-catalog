import {
    Alert,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Fragment } from 'react';
import type { Dataset } from '../../types/dataset';

interface DatasetListProps {
    datasets: Dataset[];
}

const DatasetList = ({ datasets }: DatasetListProps) => {
    if (datasets.length === 0) {
        return (
            <Paper sx={{ p: 3 }}>
                <Typography variant="body1">
                    No datasets yet. Create one to get started.
                </Typography>
            </Paper>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Domain</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>Quality Score</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {datasets.map((dataset) => (
                        <Fragment key={`${dataset.name}-${dataset.owner}`}>
                            <TableRow>
                                <TableCell>{dataset.name}</TableCell>
                                <TableCell>{dataset.domain}</TableCell>
                                <TableCell>{dataset.owner}</TableCell>
                                <TableCell>{dataset.qualityScore}</TableCell>
                                <TableCell>{dataset.status}</TableCell>
                            </TableRow>

                            {dataset.qualityScore < 60 && (
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        <Alert severity="warning">
                                            AI Insight: This dataset may require
                                            review.
                                        </Alert>
                                    </TableCell>
                                </TableRow>
                            )}
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DatasetList;
