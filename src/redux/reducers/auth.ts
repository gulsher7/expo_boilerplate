/* eslint-disable */
import { User } from "@/models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    userData: User;
    isFirstTime: boolean;
    auth_token: string;
}

const initialState: AuthState = {
    userData: {
        id: 0,
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        image: "",
        token: "",
    },
    isFirstTime: false,
    auth_token: "",

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
        },
        changeFirstTime: (state, action: PayloadAction<boolean>) => {
            state.isFirstTime = action.payload;
        },
        saveAuthToken: (state, action: PayloadAction<string>) => {
            state.auth_token = action.payload;
        },
        clearData: (state) => {
            state.userData = {
                id: 0,
                username: "",
                email: "",
                firstName: "",
                lastName: "",
                gender: "",
                image: "",
                token: "",
            };
            state.isFirstTime = false;
            state.auth_token = "";
        },
    },
});

export const { changeFirstTime, saveUserData, saveAuthToken, clearData } = authSlice.actions;

export default authSlice.reducer;