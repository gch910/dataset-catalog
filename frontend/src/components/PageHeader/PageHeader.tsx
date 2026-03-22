interface PageHeaderProps {
    onCreateDataset: () => void;
}

const PageHeader = ({ onCreateDataset }: PageHeaderProps) => {
    return (
        <header>
            <div>
                <h1>Dataset Catalog</h1>
                <p>Manage datasets and review their governance status.</p>
            </div>

            <button type="button" onClick={onCreateDataset}>
                Create Dataset
            </button>
        </header>
    );
};

export default PageHeader;
