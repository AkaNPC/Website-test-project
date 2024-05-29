import { useState, createContext, ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";


interface IDataContext {
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

const DataContext = createContext<IDataContext>({
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

type StatusProps = {
    children: ReactNode;
}

export const DataProvider = ({ children }: StatusProps) => {
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
        <DataContext.Provider value={{ authStatus, showModal, errorMsg, email, password, devicesData, setAuthStatus, toggleShowModal, setErrorMsg, setEmail, setPassword, setDevicesData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;