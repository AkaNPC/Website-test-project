import { createSlice } from "@reduxjs/toolkit";

interface IFormData {
    formData: {
        email: string;
        password: string
    };
}

const initialState: IFormData = ({
    formData: {
        email: "",
        password: ""
    },
});

export const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload
        },
        resetFormData: state => {
            state.formData = {
                email: "",
                password: ""
            }
        },
    }
});

export const { setFormData, resetFormData } = formDataSlice.actions;
export const formDataReducer = formDataSlice.reducer;