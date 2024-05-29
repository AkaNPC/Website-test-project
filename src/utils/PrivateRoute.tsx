import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/DataProvider";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
    const { toggleShowModal, setErrorMsg, authStatus } = useContext(AuthContext);
    if (!authStatus) {
        setErrorMsg("Доступ ограничен! Вы перенаправлены на страницу авторизации");
        toggleShowModal(true);
        return <Navigate to="/login" replace />
    }
    return children;
};

export default PrivateRoute;



