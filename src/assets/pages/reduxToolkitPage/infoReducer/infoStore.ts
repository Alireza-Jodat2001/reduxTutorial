import { configureStore } from '@reduxjs/toolkit';
import { infoSlice } from './infoSlice';

export const infoStore = configureStore({
    reducer: {
        info: infoSlice.reducer,
    },
});

export type RootState = ReturnType<typeof infoStore.getState>;
