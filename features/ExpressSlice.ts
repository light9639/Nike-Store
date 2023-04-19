import { ShoeViewType } from '@lib/ShoeType';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";

interface initialType {
    id: number;
    email: string;
    telephone: number;
    name: string;
    address: string;
    detailAddress: string;
    city: string;
}

const initialState: initialType = {
    id: 0,
    email: '',
    telephone: 0,
    name: '',
    address: '',
    detailAddress: '',
    city: ''
}

//상품 상세페이지에 데이터 전달
const ExpressData = createSlice({
    name: 'detailData',
    initialState: {value: initialState},
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },

        updateUsername: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            });
        },
    },
    extraReducers: builder => {
        builder.addCase(PURGE, () => initialState);
    },
})

const { actions, reducer: ExpressReducer } = ExpressData;

export const { addUser, deleteUser, updateUsername } = actions;

export default ExpressReducer;