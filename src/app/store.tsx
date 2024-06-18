import { configureStore } from "@reduxjs/toolkit";
import { authStatusReducer } from "../features/authStatusSlice";
import { devicesDataReducer } from "../features/devicesDataSlice";
import { errorMsgReducer } from "../features/errorMsgSlice";
import { loadSkeletonReducer } from "../features/loadSkeletonSlice";
import { modalReducer } from "../features/modalSlice";
import { authTokenReducer } from "../features/authTokenSlice";



export const store = configureStore({
    reducer: {
        authStatus: authStatusReducer,
        devicesData: devicesDataReducer,
        errorMsg: errorMsgReducer,
        loadSleleton: loadSkeletonReducer,
        modal: modalReducer,
        authToken: authTokenReducer
    }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']