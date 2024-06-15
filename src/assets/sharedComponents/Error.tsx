import { Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError() as Error;

    return (
        <Typography variant="h4" color="error">
            {error.message}
        </Typography>
    );
}
