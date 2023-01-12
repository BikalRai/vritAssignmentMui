import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Homepage = () => {
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(false);

    // function to call api
    const getPostData = () => {
        setLoadingPosts(true);
        fetch('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
                setLoadingPosts(false);
            });
    };
    console.log(posts, 'posts');

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <>
            <main>
                <Grid py={5}>
                    <Container>
                        <Typography variant="h3" pt={10}>
                            Posts
                        </Typography>
                        <Typography color="textSecondary">
                            Description Here
                        </Typography>
                    </Container>
                    <Container>
                        {loadingPosts ? (
                            <CircularProgress />
                        ) : (
                            <Grid container justifyContent="center" spacing={3}>
                                {posts?.map((post) => {
                                    return (
                                        <Grid item key={post.id}>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardMedia
                                                    sx={{ height: 140 }}
                                                    image={post.post_image}
                                                    title={post.post_name}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                    >
                                                        {post.post_name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        Lizards are a widespread
                                                        group of squamate
                                                        reptiles, with over
                                                        6,000 species, ranging
                                                        across all continents
                                                        except Antarctica
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">
                                                        Share
                                                    </Button>
                                                    <Button size="small">
                                                        Learn More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        )}
                    </Container>
                </Grid>
            </main>
        </>
    );
};

export default Homepage;
