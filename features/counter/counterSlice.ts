import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        Anyincrement: (state, actions) => {
            state.value += actions.payload;
        },
        Anydecrement: (state, actions) => {
            state.value -= actions.payload;
        },
    },
});

const { actions, reducer: counterReducer } = counterSlice;

export const { increment, decrement, Anyincrement, Anydecrement } = actions;

export default counterReducer;