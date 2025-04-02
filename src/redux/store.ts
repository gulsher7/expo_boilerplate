/* eslint-disable */
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;