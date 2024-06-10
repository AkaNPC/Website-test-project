import { useState, createContext, ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

interface IDataContext {
    authStatus: boolean;
    showModal: boolean;
    errorMsg: string;
    formValues: {
        email: string;
        password: string
    };
    loading: boolean;
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
    setFormValues: Dispatch<SetStateAction<{
        email: string;
        password: string
    }>>
    setLoading: Dispatch<SetStateAction<boolean>>
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
    formValues: {
        email: "",
        password: ""
    },
    loading: false,
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
    setFormValues: () => { },
    setLoading: () => { },
    setDevicesData: () => { }
});

type StatusProps = {
    children: ReactNode;
}

export const DataProvider = ({ children }: StatusProps) => {
    const [authStatus, setAuthStatus] = useState(false);
    const [showModal, toggleShowModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [devicesData, setDevicesData] = useState([{
        id: 0,
        name: "",
        uniqueId: "",
        status: "",
        lastUpdate: ""
    }])

    return (
        <DataContext.Provider value={{
            authStatus, showModal, errorMsg, formValues, loading, devicesData,
            setAuthStatus, toggleShowModal, setErrorMsg, setFormValues, setLoading, setDevicesData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;