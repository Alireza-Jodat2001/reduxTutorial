import { configureStore } from '@reduxjs/toolkit';
import BackToHomeBtn from './sharedComponents/BackToHomeBtn';
import { Box, Stack, Typography } from '@mui/material';

export default function ReduxToolkitTutorial() {
    ((): void => {
        const store = configureStore({
            reducer: {},
        });
    })();

    return (
        <Box textAlign="center">
            <Typography variant="h4" mb={2}>
                For testing, open the console of browser, and put the blank
                parentheses in end of all functions to its execution in code.
            </Typography>
            <Stack direction="row" justifyContent="center">
                <BackToHomeBtn />
            </Stack>
        </Box>
    );
}
