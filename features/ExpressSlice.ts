import { ShoeViewType } from '@lib/ShoeType';
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";

export interface initialType {
    id: number;
    email: string;
    telephone: string;
    name: string;
    address: string;
    detailAddress: string;
    city: string;
    productList: ShoeViewType[];
    totalPrice: string;
}

const initialState: initialType[] = []

//상품 상세페이지에 데이터 전달
const ExpressData = createSlice({
    name: 'ExpressData',
    initialState,
    reducers: {
        addExpress: (state, action) => {
            state.push(action.payload);
        },
        deleteExpress: (state, action) => {
            state = state.filter((user) => user.id !== action.payload.id);
        },
        deleteAllExpress: (state) => {
            state.splice(0, state.length)
        },
    },
    extraReducers: builder => {
        builder.addCase(PURGE, () => initialState);
    },
})

const { actions, reducer: ExpressReducer } = ExpressData;

export const { addExpress, deleteExpress, deleteAllExpress } = actions;

export default ExpressReducer;