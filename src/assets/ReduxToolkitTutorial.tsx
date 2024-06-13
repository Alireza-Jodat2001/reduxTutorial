import { configureStore, createSlice } from '@reduxjs/toolkit';
import BackToHomeBtn from './sharedComponents/BackToHomeBtn';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

export default function ReduxToolkitTutorial() {
    ((): void => {
        interface infoType {
            name: string;
        }

        const initialStateInfo: infoType = {
            name: '',
        };

        const infoSlice = createSlice({
            name: 'info',
            initialState: initialStateInfo,
            reducers: {
                changeName(state, action) {
                    state.name = action.payload;
                },
            },
        });

        // export const { changeName } = infoSlice.actions;
        const { changeName } = infoSlice.actions;

        const dispatch = useDispatch();
        console.log(dispatch(changeName('alireza')));

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
