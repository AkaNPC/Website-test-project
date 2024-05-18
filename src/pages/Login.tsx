// import React from "react";
import { FormControl, InputLabel, Box, FilledInput } from '@mui/material/';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Login() {


    return (
        <>
            <Box
                display="flex"
                flexDirection={'column'}
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                gap={3}
            >
                <FormControl
                    error
                    required>
                    <InputLabel
                        htmlFor="email-input">Email address</InputLabel>
                    <FilledInput
                        id="email-input"
                        aria-describedby="email" />
                </FormControl>
                <FormControl
                    error
                    required>
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <FilledInput
                        id="password-input"
                        aria-describedby="password"
                        type="password" />
                </FormControl>
                <Link to="/home">
                    <Button variant="contained">Sign in</Button>
                </Link>
            </Box>
        </>
    )
}