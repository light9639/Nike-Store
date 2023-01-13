import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";

interface CounterState {
    data: object;
}

const initialState: CounterState = {
    data: {},
};

//상품 상세페이지에 데이터 전달
const detailData = createSlice({
    name: 'detailData',
    initialState,
    reducers: {
        addDetailData(state, action) {
            state.data = action.payload
            // localStorage.setItem("itemData", JSON.stringify(action.payload));
        }
    },
    extraReducers: builder => {
        builder.addCase(PURGE, () => initialState);
    },
})

export const {addDetailData} = detailData.actions;

//latest 데이터 값 받기
const latestData = createSlice({
    name: 'latestData',
    initialState,
    reducers: {
        addLatestData(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(PURGE, () => initialState);
    },
})

export let {addLatestData} = latestData.actions;

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },
//         Anyincrement: (state, actions) => {
//             state.value += actions.payload;
//         },
//         Anydecrement: (state, actions) => {
//             state.value -= actions.payload;
//         },
//     },
//     extraReducers: builder => {
//         builder.addCase(PURGE, () => initialState);
//     },
// });

export default configureStore({
    reducer: {
        detailData: detailData.reducer,
        latestData: latestData.reducer
    }
})

// const { actions, reducer: counterReducer } = counterSlice;

// export const { increment, decrement, Anyincrement, Anydecrement } = actions;

// export default counterReducer;