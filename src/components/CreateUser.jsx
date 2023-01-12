import { Padding } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const handleFirstName = ({ target: { value } }) => {
        setFirstName((prev) => (prev = value));
    };

    const handleLastName = ({ target: { value } }) => {
        setlastName((prev) => (prev = value));
    };

    console.log(firstName, lastName);
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
                            value={firstName}
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
                            value={lastName}
                            sx={{ width: '50%' }}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="warning"
                            // size="large"
                            sx={{ padding: '0.5rem 3rem' }}
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
