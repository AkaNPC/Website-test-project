import * as React from 'react';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material/';
import SearchField from './SearchField';
import { getAllDevices } from '../../services/apiData';
import { useContext, useEffect } from 'react';
import DataContext from '../../context/DataProvider';
import AlertModal from '../../components/modal/AlertModal';


export default function DevicesNavBar() {

    const { email, password, devicesData, setDevicesData, toggleShowModal, setErrorMsg, setLoading } = useContext(DataContext);

    useEffect(() => {
    }, [devicesData])

    const fetchAllDevicesData = async () => {
        try {
            setLoading(true);
            const response = await getAllDevices(email, password);
            if (response.length === 0) {
                setLoading(false);
                setErrorMsg('Не получилось загрузить данные. Попробуйте позже');
                toggleShowModal(true);
            } else {
                setLoading(false);
                setDevicesData(response);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleDeviceList = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        await fetchAllDevicesData()
    }

    return (
        <>
            <AppBar position="static" color='secondary'>
                <AlertModal />
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            <Button
                                onClick={handleDeviceList}
                                sx={{
                                    my: 2, display: 'block', color: '#ffffff',
                                    "&:hover": {
                                        textDecoration: 'underline #ffffff'
                                    }
                                }}
                            >Show all</Button>
                        </Box>
                        <SearchField />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
