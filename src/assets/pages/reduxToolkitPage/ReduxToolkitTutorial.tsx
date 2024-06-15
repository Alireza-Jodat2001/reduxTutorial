// Mui
import { Box, Stack, Typography } from '@mui/material';

// Shared Components
import BackToHomeBtn from '../../sharedComponents/BackToHomeBtn';

// Redux
import { changeName_Age } from './infoReducer/infoSlice';
import { infoOperations } from './infoReducer/infoStore';

export default function ReduxToolkitTutorial() {
    // Dispatch & UseSelector (Info)
    const { dispatch, useTypedSelector } = infoOperations();

    // Name State Info
    const name = useTypedSelector(state => state.info.name);

    // Dispatching
    dispatch(changeName_Age('alireza', 23));

    return (
        <Box textAlign="center" sx={{ transform: 'translateY(150%)' }}>
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
