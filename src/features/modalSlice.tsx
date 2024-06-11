import { createSlice } from "@reduxjs/toolkit";

interface IModal {
    modal: boolean;
}

const initialState: IModal = ({
    modal: false,
});

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: state => {
            state.modal = true
        },
        hideModal: state => {
            state.modal = false
        },
    }
});

export const { showModal, hideModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;