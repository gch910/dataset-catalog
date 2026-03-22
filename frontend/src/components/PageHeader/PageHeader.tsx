import { Box, Button, Stack, Typography } from '@mui/material';

interface PageHeaderProps {
    onOpenCreateModal: () => void;
}

const PageHeader = ({ onOpenCreateModal }: PageHeaderProps) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box>
                <Typography variant="h4" fontWeight={600}>
                    Dataset Catalog
                </Typography>
                <Typography color="text.secondary">
                    Manage datasets and review their governance status.
                </Typography>
            </Box>

            <Button
                variant="contained"
                size="large"
                onClick={onOpenCreateModal}
            >
                Create Dataset
            </Button>
        </Stack>
    );
};

export default PageHeader;
