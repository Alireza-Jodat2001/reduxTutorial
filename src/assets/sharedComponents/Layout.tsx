import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './AppBar';

export default function Layout() {
    return (
        <Stack minHeight="100vh" direction="column">
            <ResponsiveAppBar />
            <Box>
                <Outlet />
            </Box>
        </Stack>
    );
}
