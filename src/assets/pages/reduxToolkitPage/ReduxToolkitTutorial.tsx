import BackToHomeBtn from '../../sharedComponents/BackToHomeBtn';
import { Box, Stack, Typography } from '@mui/material';
import { changeName_Age } from './infoReducer/infoSlice';
import { infoOperations } from './infoReducer/infoStore';

export default function ReduxToolkitTutorial() {
    const { dispatch, useTypedSelector } = infoOperations();
    const name = useTypedSelector(state => state.info.name);

    dispatch(changeName_Age('alireza', 23));

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
