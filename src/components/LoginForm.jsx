import {
    Alert,
    Button,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography,
    Link,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
    const [userDetail, setUserDetail] = useState({
        username: '',
        password: '',
    });

    const [userData, setuserData] = useState({
        username: 'Sam',
        password: '1234',
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const { username, password } = userDetail;

    // user handler
    const userHandle = ({ target: { value } }) => {
        setUserDetail((prev) => {
            console.log(prev);
            return { ...prev, username: value };
        });
    };

    // password handle
    const passwordHandle = ({ target: { value } }) => {
        setUserDetail((prev) => {
            console.log(prev);
            return { ...prev, password: value };
        });
    };

    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === userData.username && password === userData.password) {
            setIsLoggedIn(true);
            setError(false);
        } else {
            setError(true);
            setIsLoggedIn(false);
        }
    };

    // handle no account
    const noAccount = () => {
        navigate('/register');
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    margin: '5rem auto',
                    padding: '5rem',
                    maxWidth: '40%',
                }}
            >
                <Grid container flexDirection="column" spacing={4}>
                    <Grid item>
                        <Typography variant="h4">Login</Typography>
                    </Grid>
                    <Grid item>
                        {/* <FormControl sx={{ width: '20rem' }} variant="standard">
                        <InputLabel>Username:</InputLabel>
                        <Input
                            type="text"
                            value={username}
                            onChange={userHandle}
                        />
                    </FormControl> */}
                        <TextField
                            variant="outlined"
                            label="Username"
                            fullWidth
                            required
                            value={username}
                            onChange={userHandle}
                        ></TextField>
                    </Grid>
                    <Grid item>
                        {/* <FormControl sx={{ width: '20rem' }} variant="standard">
                        <InputLabel>Password:</InputLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={passwordHandle}
                        />
                    </FormControl> */}

                        <FormControl
                            sx={{ m: 1, width: '100%', margin: 'auto' }}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={passwordHandle}
                                id="outlined-adornment-password"
                                // type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            //   onClick={handleClickShowPassword}
                                            //   onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid>
                    <Grid my={2} item>
                        <Button
                            onClick={handleLogin}
                            variant="contained"
                            color="warning"
                            // sx={{ padding: '0.75rem 2.5rem' }}
                            fullWidth
                        >
                            Login
                        </Button>
                    </Grid>

                    <Grid my={2}>
                        {error &&
                            username !== userData.username &&
                            password !== userData.password && (
                                <Stack>
                                    <Alert severity="error">
                                        No such username or password is wrong
                                    </Alert>
                                </Stack>
                            )}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography component={Link}>
                            Forgot password?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component={Link} onClick={noAccount}>
                            Don't have an account? Sign Up
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default LoginForm;
