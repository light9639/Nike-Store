import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import DataReducer from 'features/DataSlice';
import ExpressReducer from "features/ExpressSlice";
import searchReducer from "features/SearchSlice";

const reducers = combineReducers({
    data: DataReducer,
    Login: ExpressReducer,
    search: searchReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

// redux-persist를 통한 데이터 로컬 저장
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

// 리덕스 사용함수 선언
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

// 리덕스 타입 지정
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;