import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";

interface SearchType {
    value: string;
}

const initialState: SearchType = { value: "" };

//상품 상세페이지에 데이터 전달
const searchData = createSlice({
    name: 'searchData',
    initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

const { actions, reducer: searchReducer } = searchData;

export let { changeValue } = actions;

export default searchReducer;