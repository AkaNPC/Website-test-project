import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Menu, SwipeableDrawer, Button, Divider } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setAuthStatusFalse } from '../features/authStatusSlice';
import { resetDevicesData } from '../features/devicesDataSlice';
import { resetAuthToken } from '../features/authTokenSlice';


const linksNames = ['home', 'device list', 'login'];

function formatLinkTo(pageName: string) {
    let newPageName;
    newPageName = pageName.replace(/\s+/g, '');
    if (pageName === 'home') {
        newPageName = pageName.replace(pageName, '')
    }
    return newPageName
}

export default function NavBar() {

    const dispatch = useAppDispatch();
    const authStatus = useAppSelector((state) => state.authStatus.authStatus);

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleLogout = () => {
        dispatch(setAuthStatusFalse());
        dispatch(resetAuthToken());
        navigate('/login')
    }

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem sx={{
                "&:hover": {
                    textDecoration: 'underline rgb(56, 88, 158)'
                }
            }} onClick={handleMenuClose}>Settings</MenuItem>
            <Divider />
            <MenuItem sx={{
                "&:hover": {
                    textDecoration: 'underline rgb(56, 88, 158)'
                }
            }} onClick={handleLogout}>{authStatus ? "Logout" : "Login"}</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const navItemsList = linksNames.map((linkName) => (
        <Link
            unstable_viewTransition
            key={linkName}
            to={'/' + formatLinkTo(linkName)}
            style={{ textDecoration: 'none' }}>
            <Button onClick={() => dispatch(resetDevicesData())}
                sx={{
                    my: 2, color: { xs: '#37405c', sm: '#37405c', md: '#ffffff', lg: '#ffffff', xl: '#ffffff' },
                    "&:hover": {
                        textDecoration: 'underline #ffffff'
                    }, display: 'block', fontWeight: 'bold'
                }}>{linkName}
            </Button>
            <Divider sx={{ display: { xs: '', sm: '', md: 'none', lg: 'none', xl: 'none' } }} />
        </Link >
    ));


    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: '', sm: '', md: 'none', lg: 'none', xl: 'none', flexDirection: 'column' } }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        <SwipeableDrawer
                            transitionDuration={500}
                            anchor={'top'}
                            open={open}
                            onClick={() => setOpen(false)}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                        >{navItemsList}
                        </SwipeableDrawer>
                    </Typography>
                    <IconButton
                        onClick={() => setOpen(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                <Box sx={{
                    flexGrow: 1,
                }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}
                    > {navItemsList}
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    ><AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </AppBar>
    );
}