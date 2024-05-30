import { Navigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataProvider";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
    const { toggleShowModal, setErrorMsg, authStatus } = useContext(DataContext);
    if (!authStatus) {
        setErrorMsg("Доступ ограничен! Вы перенаправлены на страницу авторизации");
        toggleShowModal(true);
        return <Navigate to="/login" replace />
    }
    return children;
};

export default PrivateRoute;



