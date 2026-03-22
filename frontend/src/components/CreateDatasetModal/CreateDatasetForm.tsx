import { useState } from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from '@mui/material';
import type {
    Dataset,
    CreateDatasetFormValues,
    DatasetStatus,
} from '../../types/dataset';

interface CreateDatasetFormProps {
    onCancel: () => void;
    onCreateDataset: (dataset: Dataset) => void;
}

const initialFormData: CreateDatasetFormValues = {
    name: '',
    domain: '',
    owner: '',
    qualityScore: '',
    status: 'Approved',
};

const CreateDatasetForm = ({
    onCancel,
    onCreateDataset,
}: CreateDatasetFormProps) => {
    const [formData, setFormData] =
        useState<CreateDatasetFormValues>(initialFormData);

    const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleStatusChange = (value: DatasetStatus) => {
        setFormData((current) => ({
            ...current,
            status: value,
        }));
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newDataset: Dataset = {
            ...formData,
            qualityScore: Number(formData.qualityScore),
        };
        onCreateDataset(newDataset);
        setFormData(initialFormData);
        onCancel();
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit}>
            <DialogContent>
                <Stack spacing={2} sx={{ mt: 1 }}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleTextInputChange}
                        required
                        fullWidth
                    />

                    <TextField
                        label="Domain"
                        name="domain"
                        value={formData.domain}
                        onChange={handleTextInputChange}
                        required
                        fullWidth
                    />

                    <TextField
                        label="Owner Email"
                        name="owner"
                        type="email"
                        value={formData.owner}
                        onChange={handleTextInputChange}
                        required
                        fullWidth
                    />

                    <TextField
                        label="Quality Score"
                        name="qualityScore"
                        type="number"
                        slotProps={{ htmlInput: { min: 0, max: 100 } }}
                        value={formData.qualityScore}
                        onChange={handleTextInputChange}
                        required
                        fullWidth
                    />

                    <FormControl fullWidth>
                        <InputLabel id="dataset-status-label">
                            Status
                        </InputLabel>
                        <Select
                            labelId="dataset-status-label"
                            value={formData.status}
                            label="Status"
                            onChange={(e) =>
                                handleStatusChange(
                                    e.target.value as DatasetStatus,
                                )
                            }
                        >
                            <MenuItem value="Approved">Approved</MenuItem>
                            <MenuItem value="NeedsReview">NeedsReview</MenuItem>
                            <MenuItem value="Rejected">Rejected</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="submit" variant="contained">
                    Save Dataset
                </Button>
            </DialogActions>
        </form>
    );
};

export default CreateDatasetForm;
