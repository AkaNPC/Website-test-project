import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchField from './SearchField';
import { getAllDevices } from '../../services/apiData';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthProvider';
import AlertModal from '../../components/modal/AlertModal';


export default function DevicesNavBar() {

    const { email, password, devicesData, setDevicesData, setErrorMsg } = useContext(AuthContext);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    useEffect(() => {
    }, [devicesData])

    const fetchAllDevicesData = async () => {
        try {
            const response = await getAllDevices(email, password);
            if (response.length === 0) {
                setErrorMsg('Не получилось загрузить данные. Попробуйте позже');
            } else {
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

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static" color='secondary'>
                <AlertModal />
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={handleDeviceList}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Show all</Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Add</Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Delete</Button>
                        </Box>
                        <SearchField />
                        <Box sx={{ flexGrow: 0 }}>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
