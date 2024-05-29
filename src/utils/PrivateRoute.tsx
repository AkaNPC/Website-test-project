import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/DataProvider";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
    const { authStatus } = useContext(AuthContext);
    if (!authStatus) {
        return <Navigate to="/login" replace />
    }
    return children;
};

export default PrivateRoute;



