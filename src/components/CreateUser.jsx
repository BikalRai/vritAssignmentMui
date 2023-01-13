import { Padding } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const navigate = useNavigate();

    // function to post user data
    const postData = () => {
        axios
            .post('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users', {
                firstname,
                lastname,
            })
            .then((data) => {
                navigate('/users');
            });
    };

    // function to handle first name
    const handleFirstName = ({ target: { value } }) => {
        setFirstName((prev) => (prev = value));
    };

    //function to handle last name
    const handleLastName = ({ target: { value } }) => {
        setlastName((prev) => (prev = value));
    };

    const handleSubmit = () => {
        postData();
    };

    // console.log(firstName, lastName);
    return (
        <>
            <Container
                sx={{
                    maxWidth: '60%',
                    margin: '10rem auto',
                }}
            >
                <Typography variant="h3" my={5}>
                    Create User
                </Typography>
                <Grid
                    container
                    flexDirection="column"
                    spacing={5}
                    sx={{ width: '100%' }}
                >
                    <Grid item>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size="large"
                            onChange={handleFirstName}
                            value={firstname}
                            sx={{ width: '50%' }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="outlined-basic"
                            label="Lastname"
                            variant="outlined"
                            size="large"
                            onChange={handleLastName}
                            value={lastname}
                            sx={{ width: '50%' }}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="warning"
                            // size="large"
                            sx={{ padding: '0.5rem 3rem' }}
                            onClick={() => handleSubmit()}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default CreateUser;
