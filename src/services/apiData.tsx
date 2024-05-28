import axios from "axios";

const _apiData = "https://gps.autotracker.group/api/";

export const setAuthSession = async (email: string, pwd: string) => {
    try {
        const response = await axios.post("https://gps.autotracker.group/api/session", {
            email: email,
            password: pwd
        },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                validateStatus: () => true
            }
        );
        return response
    } catch (error) {
        return (error.response.status)
    }
}

const getSomeData = async (url: string, email: string, pwd: string) => {
    try {
        const response = await axios.get((_apiData + url), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            validateStatus: () => true,
            auth: {
                username: email,
                password: pwd
            }
        });
        if (url === "devices/") {
            return (response.data)
        } else {
            return (response.data)
        }
    } catch (error) {
        return (error.response.status)
    }
}

export const getAllDevices = async (email: string, pwd: string) => {
    return await getSomeData("devices/", email, pwd);
}

export const getDeviceById = async (id: number, email: string, pwd: string) => {
    return await getSomeData("devices/" + `${id}`, email, pwd);
}