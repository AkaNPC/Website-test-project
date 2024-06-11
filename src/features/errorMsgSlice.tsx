import { createSlice } from "@reduxjs/toolkit";

interface IErrorMsg {
    errorMsg: string;
}

const initialState: IErrorMsg = ({
    errorMsg: "",
});

export const errorMsgSlice = createSlice({
    name: 'errorMsg',
    initialState,
    reducers: {
        setErrorMsg: (state, action) => {
            state.errorMsg = action.payload
        },
        resetErrorMsg: state => {
            state.errorMsg = ""
        },
    }
});

export const { setErrorMsg, resetErrorMsg } = errorMsgSlice.actions;
export const errorMsgReducer = errorMsgSlice.reducer;