import { useState, createContext, ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";


interface IAuthContext {
    authStatus: boolean;
    showModal: boolean;
    errorMsg: string;
    email: string;
    password: string;
    devicesData: {
        id: number;
        name: string;
        uniqueId: string;
        status: string;
        lastUpdate: string
    }[] | [];
    setAuthStatus: Dispatch<SetStateAction<boolean>>
    toggleShowModal: Dispatch<SetStateAction<boolean>>
    setErrorMsg: Dispatch<SetStateAction<string>>
    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    setDevicesData: Dispatch<SetStateAction<{
        id: number;
        name: string;
        uniqueId: string;
        status: string;
        lastUpdate: string
    }[] | []>>
}

const AuthContext = createContext<IAuthContext>({
    authStatus: false,
    showModal: false,
    errorMsg: "",
    email: "",
    password: "",
    devicesData: {
        id: 0,
        name: "",
        uniqueId: "",
        status: "",
        lastUpdate: ""
    },
    setAuthStatus: () => { },
    toggleShowModal: () => { },
    setErrorMsg: () => { },
    setEmail: () => { },
    setPassword: () => { },
    setDevicesData: () => { }
});

type AuthStatusProps = {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthStatusProps) => {
    const [authStatus, setAuthStatus] = useState(false);
    const [showModal, toggleShowModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [devicesData, setDevicesData] = useState([{
        id: 0,
        name: "",
        uniqueId: "",
        status: "",
        lastUpdate: ""
    }])

    return (
        <AuthContext.Provider value={{ authStatus, showModal, errorMsg, email, password, devicesData, setAuthStatus, toggleShowModal, setErrorMsg, setEmail, setPassword, setDevicesData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;