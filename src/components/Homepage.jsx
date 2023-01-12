import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Pagination,
    Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Homepage = () => {
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [postPerPage, setPostPerPage] = useState(6);
    const [page, setPage] = useState(1);

    // function to call api
    const getPostData = () => {
        setLoadingPosts(true);
        // fetch('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setPosts(data);
        //         setLoadingPosts(false);
        //     });
        axios
            .get('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts')
            .then(({ data }) => {
                setPosts(data);
                setLoadingPosts(false);
            });
        // console.log(postsObj);
    };

    console.log(posts, 'posts');

    // page handler
    const pageHandler = (e, newPage) => {
        console.log(newPage, 'new page');
        setPage(newPage);
    };

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
                                {posts
                                    ?.slice(
                                        page * postPerPage - postPerPage,
                                        postPerPage * page
                                    )
                                    .map((post) => {
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
                                                            Lizards are a
                                                            widespread group of
                                                            squamate reptiles,
                                                            with over 6,000
                                                            species, ranging
                                                            across all
                                                            continents except
                                                            Antarctica
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
                <Grid container justifyContent="center">
                    <Grid item>
                        <Pagination
                            count={Math.ceil(posts.length / postPerPage)}
                            shape="rounded"
                            onChange={pageHandler}
                        />
                    </Grid>
                </Grid>
            </main>
        </>
    );
};

export default Homepage;
