import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    return (
        <>
            <main>
                <Grid py={8}>
                    <Box
                        sx={{
                            height: '100vh',
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                height: '100%',
                            }}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid item>
                                <Typography variant="subtitle1" color="cyan">
                                    Vrit Technologies / About Us
                                </Typography>
                                <Typography variant="h4" color="#fff">
                                    About us
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Container maxWidth="md">
                        <Grid container>
                            <Grid item>
                                <Typography variant="h4" align="center" pt={3}>
                                    About Vrit Technologies.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container sx={{ textAlign: 'left' }}>
                        <Typography color="textSecondary" py={2}>
                            Vrit Technologies is believed to be one of the
                            popular providers of IT services in Nepal. The
                            company is equipped with fine infrastructure and
                            ideal technology support. Vrit Tech has a broader
                            distribution network so that the business
                            requirements of the partners can be satisfied. Our
                            primary asset is our team of talented, enthusiastic
                            and committed individuals.
                        </Typography>
                        <Typography color="textSecondary" py={2}>
                            Bibek and Umesh Subedi the two co-founders started
                            Vrit Technologies as an information technology
                            startup in 2019. Since the last three years, Vrit
                            technology has helped numerous startups and
                            businesses grow and scale by delivering digital
                            services such as web development, digital marketing,
                            cybersecurity solutions, IoT and business
                            automation, and more.
                        </Typography>
                        <Typography color="textSecondary" py={2}>
                            Our company’s vision is to be an ideal global
                            services and IT Solutions Company. We would attain
                            prominent place in the market by comprehending the
                            needs of customers and working with our partners to
                            provide solutions that real business value.{' '}
                        </Typography>
                        <Typography variant="h6" py={2}>
                            If you’re looking for any IT Support or Solutions
                            let’s work together 😊
                        </Typography>
                    </Container>
                </Grid>
            </main>
        </>
    );
};

export default AboutUs;
