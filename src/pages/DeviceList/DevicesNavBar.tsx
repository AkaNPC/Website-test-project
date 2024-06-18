import * as React from 'react';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material/';
import SearchField from './SearchField';
import { getAllDevices } from '../../services/apiData';
import { useAppDispatch, } from '../../app/hooks';
import { hideSkeleton, showSkeleton } from '../../features/loadSkeletonSlice';
import { setErrorMsg } from '../../features/errorMsgSlice';
import { showModal } from '../../features/modalSlice';
import { setDevicesData } from '../../features/devicesDataSlice';
import { useAppSelector } from '../../app/hooks';
import { encodeString } from '../../utils/encodeString';


export default function DevicesNavBar() {

    const authToken = useAppSelector((state) => state.authToken.authToken);
    const dispatch = useAppDispatch();
    const encodedToken = encodeString(authToken);

    const fetchAllDevicesData = async () => {
        try {
            dispatch(showSkeleton());
            const response = await getAllDevices(encodedToken);
            if (response.length === 0) {
                dispatch(hideSkeleton());
                dispatch(setErrorMsg("Не получилось загрузить данные. Попробуйте позже"));
                dispatch(showModal());
            } else {
                dispatch(hideSkeleton());
                dispatch(setDevicesData(response));
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
