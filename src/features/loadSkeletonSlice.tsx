import { createSlice } from "@reduxjs/toolkit";

interface ILoadSkeleton {
    loadSkeleton: boolean;
}

const initialState: ILoadSkeleton = ({
    loadSkeleton: false,
});

export const loadSkeletonSlice = createSlice({
    name: 'loadSkeleton',
    initialState,
    reducers: {
        showSkeleton: state => {
            state.loadSkeleton = true
        },
        hideSkeleton: state => {
            state.loadSkeleton = false
        },
    }
});

export const { showSkeleton, hideSkeleton } = loadSkeletonSlice.actions;
export const loadSkeletonReducer = loadSkeletonSlice.reducer;