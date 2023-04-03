import { ShoeViewType } from '@lib/ShoeType';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";

interface initialType {
    email: string;
    phone: string;
    fullName: string;
    address: string;
    city: string;
    country: string;
}

const initialState: initialType = {
    email: '',
    phone: '',
    fullName: '',
    address: '',
    city: '',
    country: ''
}

//상품 상세페이지에 데이터 전달
const LoginData = createSlice({
    name: 'detailData',
    initialState,
    reducers: {
        // addDetailData(state, action) {
        //     state.push(action.payload)
        // }
    },
    extraReducers: builder => {
        builder.addCase(PURGE, () => initialState);
    },
})

const { actions, reducer: LoginReducer } = LoginData;

// export const { addDetailData } = actions;

export default LoginReducer;