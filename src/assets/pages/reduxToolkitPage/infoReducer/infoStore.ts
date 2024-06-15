import { configureStore } from '@reduxjs/toolkit';
import { infoSlice } from './infoSlice';
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector,
} from 'react-redux';

export const infoStore = configureStore({
    reducer: {
        info: infoSlice.reducer,
    },
});

export function infoOperations() {
    type RootState = ReturnType<typeof infoStore.getState>;
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

    type AppDispatch = typeof infoStore.dispatch;
    const useDispatch = () => useReduxDispatch<AppDispatch>();
    const dispatch = useDispatch();

    const values = {
        useTypedSelector,
        dispatch,
    };

    return values;
}
