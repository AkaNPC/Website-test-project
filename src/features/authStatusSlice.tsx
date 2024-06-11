import { createSlice } from "@reduxjs/toolkit";

interface IAuthStatus {
    authStatus: boolean;
}

const initialState: IAuthStatus = ({
    authStatus: false
});

export const authStatusSlice = createSlice({
    name: 'authStatus',
    initialState,
    reducers: {
        setAuthStatusTrue: state => {
            state.authStatus = true
        },
        setAuthStatusFalse: state => {
            state.authStatus = false
        }
    }
});

export const { setAuthStatusTrue, setAuthStatusFalse } = authStatusSlice.actions;
export const authStatusReducer = authStatusSlice.reducer;