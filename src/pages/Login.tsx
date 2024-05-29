import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/DataProvider';
import { useNavigate } from 'react-router-dom'
import { setAuthSession } from '../services/apiData';
import AlertModal from '../components/modal/AlertModal';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                Test Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Login() {

    const { authStatus, email, password, setAuthStatus, toggleShowModal, setErrorMsg, setEmail, setPassword } = useContext(AuthContext);
    const [errorMail, setMailError] = useState(false);
    const [errorPwd, setPwdError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    useEffect(() => {
    }, [authStatus, email, password])

    const fetchSession = async () => {
        try {
            const response = await setAuthSession(email, password);
            if (response?.status === 200) {
                setAuthStatus(true);
                navigate('/');
            } else if (response?.status === 401) {
                setErrorMsg("Email или Пароль неверен. Вы не авторизованы");
                toggleShowModal(true);
                setAuthStatus(false);
            } else {
                setErrorMsg('Вход не выполнен...');
                toggleShowModal(true);
                setAuthStatus(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await fetchSession()
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if (e.target.validity.valid) {
            setMailError(false);
        } else {
            setMailError(true);
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (e.target.validity.valid) {
            setPwdError(false);
        } else {
            setPwdError(true);
        }
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <AlertModal />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        error={errorMail}
                        helperText={"Заполните пустое поле"}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        error={errorPwd}
                        helperText={"Заполните пустое поле"}
                        onChange={handlePasswordChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright />
        </Container>
    );
}