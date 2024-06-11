import { configureStore } from "@reduxjs/toolkit";
import { authStatusReducer } from "../features/authStatusSlice";
import { devicesDataReducer } from "../features/devicesDataSlice";
import { errorMsgReducer } from "../features/errorMsgSlice";
import { formDataReducer } from "../features/formDataSlice";
import { loadSkeletonReducer } from "../features/loadSkeletonSlice";
import { modalReducer } from "../features/modalSlice";



export const store = configureStore({
    reducer: {
        authStatus: authStatusReducer,
        devicesData: devicesDataReducer,
        errorMsg: errorMsgReducer,
        formData: formDataReducer,
        loadSleleton: loadSkeletonReducer,
        modal: modalReducer,
    }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']