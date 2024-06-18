import { createSlice } from "@reduxjs/toolkit";

interface IAuthToken {
    authToken: string;
}

const initialState: IAuthToken = ({
    authToken: ""
});

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload
        },
        resetAuthToken: state => {
            state.authToken = ""
        }
    }
});

export const { setAuthToken, resetAuthToken } = authTokenSlice.actions;
export const authTokenReducer = authTokenSlice.reducer;