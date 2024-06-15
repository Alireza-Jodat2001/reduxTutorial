import { Box, Stack, Typography } from '@mui/material';
import BackToHomeBtn from '../../sharedComponents/BackToHomeBtn';
import { changeName_Age } from './infoReducer/infoSlice';
import { infoOperations } from './infoReducer/infoStore';
import { useLoaderData, useNavigation } from 'react-router-dom';

export default function ReduxToolkitTutorial() {
    const { dispatch, useTypedSelector } = infoOperations();
    const users = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const { name: infoName, age: infoAge } = useTypedSelector(
        ({ info }) => info
    );

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
