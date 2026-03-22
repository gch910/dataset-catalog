interface CreateDatasetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateDatasetModal = ({ isOpen, onClose }: CreateDatasetModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div>
                <h2>Create Dataset</h2>
                <p>Form Goes here.</p>
            </div>

            <button type="button" onClick={onClose}>
                Close
            </button>
        </div>
    );
};

export default CreateDatasetModal;
