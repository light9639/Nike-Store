import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { detailData, latestData } from "features/counter/counterSlice";
// import reducer from 'features/counter/counterSlice';


// export default configureStore({
//     reducer: {
//         detailData: detailData.reducer,
//         latestData: latestData.reducer
//     }
// })

const reducers = combineReducers({
    detailData: detailData.reducer,
    latestData: latestData.reducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;