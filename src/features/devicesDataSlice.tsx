import { createSlice } from "@reduxjs/toolkit";

interface IDevicesData {
    devicesData: {
        id: number;
        name: string;
        uniqueId: string;
        status: string;
        lastUpdate: string
    }[] | [];
}

const initialState: IDevicesData = ({
    devicesData: []
});


export const devicesDataSlice = createSlice({
    name: 'devicesData',
    initialState,
    reducers: {
        setDevicesData: (state, action) => {
            state.devicesData = action.payload
        },
        resetDevicesData: state => {
            state.devicesData = []
        }
    }
});

export const { setDevicesData, resetDevicesData } = devicesDataSlice.actions;
export const devicesDataReducer = devicesDataSlice.reducer;

