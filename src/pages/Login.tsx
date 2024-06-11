import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Container, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar } from '@mui/material/';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { setAuthSession } from '../services/apiData';
import AlertModal from '../components/modal/AlertModal';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setFormData } from '../features/formDataSlice';
import { setAuthStatusFalse, setAuthStatusTrue } from '../features/authStatusSlice';
import { setErrorMsg } from '../features/errorMsgSlice';
import { showModal } from '../features/modalSlice';


interface IFormInputs {
    email: string;
    password: string;
}

function Copyright() {
    return (
        <Typography variant="body2" color="#37405c" align="center">
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

    const dispatch = useAppDispatch();
    const authStatus = useAppSelector((state) => state.authStatus.authStatus);
    const email = useAppSelector((state) => state.formData.formData.email);
    const password = useAppSelector((state) => state.formData.formData.password);

    useEffect(() => {
        if (password && !authStatus) {
            fetchSession()
        }
    })

    const navigate = useNavigate();

    const { handleSubmit, control, formState: { isValid, isDirty } } = useForm<IFormInputs>({
        mode: "all"
    });

    const formSubmit = (data: IFormInputs, e?: React.BaseSyntheticEvent) => {
        e?.preventDefault();
        dispatch(setFormData(data));
    }

    const fetchSession = async () => {
        try {
            const response = await setAuthSession(email, password);
            console.log(response);
            if (response?.status === 200) {
                dispatch(setAuthStatusTrue());
                navigate('/');
            } else if (response?.status === 401) {
                dispatch(setErrorMsg("Email или Пароль неверен. Вы не авторизованы"));
                dispatch(showModal());
                dispatch(setAuthStatusFalse());
            } else {
                dispatch(setErrorMsg('Вход не выполнен...'));
                dispatch(showModal());
                dispatch(setAuthStatusFalse());
            }
        } catch (error) {
            console.log(error)
        }
    }

    const emailPattern = /^(?=.{1,256})(?=.{1,64}@.{0,63}.{1,255}$)(((?:[A-Za-z0-9_%!#$&'*+/=?^`{|}~-]+\.)*[A-Za-z0-9_%!#$&'*+/=?^`{|}~-]){1,64})+@(?:[A-Za-z0-9]+(\.|-))*(?:[A-Za-z0-9]+(\.|-))*[A-Za-z]{1,63}$/;
    const passwordPattern = /[A-Za-z0-9/~`! @#$%^&*()_+={[}:;"'<,>.?-]+$/;


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
                <Box component="form" onSubmit={handleSubmit(formSubmit)} noValidate sx={{ mt: 1 }}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                error={!!error}
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                helperText={error ? error.message : ''}
                            />
                        )}
                        rules={{
                            required: "Поле Email обязательно к заполнению",
                            pattern: {
                                value: emailPattern,
                                message: "Недопустимый Email. Проверьте пожалуйста введенные данные",
                            },
                            minLength: {
                                value: 3,
                                message: "Email должен состоять минимум из 3 символов",
                            },
                            maxLength: {
                                value: 256,
                                message: "Email превышает максимальный лимит в 256 символов",
                            },
                        }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                error={!!error}
                                margin="normal"
                                fullWidth
                                id="password"
                                type="password"
                                label="Password"
                                autoComplete="current-password"
                                helperText={error ? error?.message : ''}
                            />
                        )}
                        rules={{
                            required: "Поле Password обязательно к заполнению",
                            pattern: {
                                value: passwordPattern,
                                message: "Введен недопустимый символ. Проверьте пожалуйста данные",
                            },
                            minLength: {
                                value: 6,
                                message: "Пароль должен состоять минимум из 6 символов",
                            },
                            maxLength: {
                                value: 100,
                                message: "Пароль превышает максимальный лимит в 100 символов",
                            },
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={!isDirty || !isValid}
                        sx={{ mt: 3, mb: 2, color: '#ffffff', backgroundColor: '#4b44f4' }}
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