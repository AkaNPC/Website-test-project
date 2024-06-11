import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setErrorMsg } from "../features/errorMsgSlice";
import { showModal } from "../features/modalSlice";

interface Props {
    children?: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const authStatus = useAppSelector(state => state.authStatus.authStatus);

    useEffect(() => {
    }, [authStatus])

    if (!authStatus) {
        dispatch(setErrorMsg("Доступ ограничен! Вы перенаправлены на страницу авторизации"));
        dispatch(showModal());
        return <Navigate to="/login" replace />
    }
    return children
};

export default PrivateRoute;



