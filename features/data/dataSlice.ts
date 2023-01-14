import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";

const initialState: any[] = []

//상품 상세페이지에 데이터 전달
const detailData = createSlice({
    name: 'detailData',
    initialState,
    reducers: {
        addDetailData(state, action) {
            state.push(action.payload)
        },
        RemoveDetailData(state, action) {
            state.splice(action.payload, action.payload+1)
        },
        Increase(state, action) {
            let Number = state.findIndex((a)=>{ return a.index === action.payload })
            state[Number].count++
        },
        Decrease(state, action) {
            let Number = state.findIndex((a)=>{ return a.index === action.payload })
            state[Number].count--
        },
    },
    extraReducers: builder => {
        builder.addCase(PURGE, () => initialState);
    },
})

const { actions, reducer: DataReducer } = detailData;

export const { addDetailData, RemoveDetailData, Increase, Decrease } = actions;

export default DataReducer;