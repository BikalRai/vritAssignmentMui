import {
    AppBar,
    Button,
    Grid,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';
import NoteIcon from '@mui/icons-material/Note';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';

const Header = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const logout = () => {
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <>
            <AppBar position="fixed" color="warning">
                <Toolbar>
                    <Container>
                        <Grid
                            container
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <NoteIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6">
                                            Posts
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item ml={2}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            component={Link}
                                            to="/"
                                            underline="hover"
                                            color="#fff"
                                        >
                                            Home
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            component={Link}
                                            to="about-us"
                                            color="#fff"
                                        >
                                            About
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            component={Link}
                                            to="/users"
                                            color="#fff"
                                        >
                                            Users
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="standard"
                                    color="info"
                                    size="small"
                                    placeholder="Search"
                                />
                                <SearchIcon />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="subtitle1"
                                    component={Link}
                                    color="#fff"
                                    onClick={logout}
                                >
                                    Logout
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
