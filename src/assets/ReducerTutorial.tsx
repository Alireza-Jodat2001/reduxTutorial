import { combineReducers, createStore } from 'redux';
import BackToHomeBtn from './sharedComponents/BackToHomeBtn';
import { Box, Stack, Typography } from '@mui/material';

export default function ReducerTutorial() {
    ((): void => {
        interface dataType {
            name?: string;
            family?: string;
            age?: number;
            newField?: object;
        }

        interface actionType {
            type: string;
            data: dataType;
        }

        const initialState: dataType = {
            name: 'Alireza',
            family: 'Jodat',
            age: 22,
        };

        function reducerFunction(state = initialState, action: actionType) {
            switch (action.type) {
                case 'changeName':
                case 'changeFamily':
                    console.log('Hey Redux...');
                    return { ...state, ...action.data };
                case 'newField':
                    return { ...state, ...action.data };
                default:
                    return state;
            }
        }

        const myStore = createStore(reducerFunction);

        myStore.dispatch({ type: 'changeName', data: { name: 'Behzad' } });

        // for reading only code, use this following way...
        // import from 'store.tsx'

        console.log(myStore.getState()); // {name: 'Behzad', family: 'Jodat', age: 22}

        const familyDispatch = (family: string): actionType => ({
            type: 'changeFamily',
            data: { family },
        });

        myStore.dispatch(familyDispatch('Jannesar'));

        console.log(myStore.getState());

        const rootReducer = combineReducers({
            personalInformation: reducerFunction,
        });

        const combineStore = createStore(rootReducer);

        const newFieldFunction = (newField: object): actionType => ({
            type: 'newField',
            data: { ...newField },
        });

        combineStore.dispatch(newFieldFunction({ phoneNumber: 935_922_7339 }));

        console.log(combineStore.getState());

        // import {Provider} from 'react-redux'
        // <Provider store={combineStore}><App/></Provider>
        // import {useSelector} from 'react-redux'
        // const personalInfo = useSelector(store => store.personalInformation)
        // const personalInfo = useSelector(store => store.personalInformation.age)
        // import {useDispatch} from 'react-redux'
        // const dispatch = useDispatch()
        // dispatch(newFieldFunction({isMale: true}))

        // const showBalanceEl = phoneNumber => <Box>{phoneNumber}</Box>;
        // export default connect({ phoneNumber: state.phoneNumber })(showBalanceEl)
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
