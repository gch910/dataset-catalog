import { Dialog, DialogTitle } from '@mui/material';
import type { Dataset } from '../../types/dataset';
import CreateDatasetForm from './CreateDatasetForm';

interface CreateDatasetModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreateDataset: (dataset: Dataset) => void;
}

const CreateDatasetModal = ({
    isOpen,
    onClose,
    onCreateDataset,
}: CreateDatasetModalProps) => {
    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Create Dataset</DialogTitle>
            <CreateDatasetForm
                onCancel={onClose}
                onCreateDataset={onCreateDataset}
            />
        </Dialog>
    );
};

export default CreateDatasetModal;
