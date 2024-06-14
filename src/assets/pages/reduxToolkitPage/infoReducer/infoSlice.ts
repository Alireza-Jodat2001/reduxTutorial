import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface infoInitialType {
    name?: string;
    age?: number;
}

const initialStateInfo: infoInitialType = {
    name: '',
    age: 0,
};

export const infoSlice = createSlice({
    name: 'info',
    initialState: initialStateInfo,
    reducers: {
        changeName_Age: {
            prepare(name: string, age: number): { payload: infoInitialType } {
                return { payload: { name, age } };
            },
            reducer(state, action: PayloadAction<infoInitialType, string>) {
                const { name, age } = action.payload;
                state.name = name;
                state.age = age;
            },
        },
    },
});

export const { changeName_Age } = infoSlice.actions;
