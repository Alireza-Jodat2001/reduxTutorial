import BackToHomeBtn from '../../sharedComponents/BackToHomeBtn';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeName_Age } from './infoReducer/infoSlice';
import { RootState } from './infoReducer/infoStore';

export default function ReduxToolkitTutorial() {
    const dispatch = useDispatch();
    const { name, age } = useSelector((state: RootState) => {
        const { name, age } = state.info;
        return { name, age };
    });

    dispatch(changeName_Age('alireza', 23));

    console.log(name, age);

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
