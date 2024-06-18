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

const getSomeData = async (url: string, token: string) => {
    try {
        const response = await axios.get((_apiData + url), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + token
            },
            validateStatus: () => true,
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

export const getAllDevices = async (token: string) => {
    return await getSomeData("devices/", token);
}

export const getDeviceById = async (id: number, token: string) => {
    return await getSomeData("devices/" + `${id}`, token);
}