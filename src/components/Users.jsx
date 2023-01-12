import {
    Button,
    CircularProgress,
    Grid,
    Pagination,
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const getUserData = () => {
        setLoadingData(true);
        // fetch('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data, 'users');
        //         setUsers(data);
        //         setLoadingData(false);
        //     });
        let getData = axios
            .get('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users')
            .then(({ data }) => {
                console.log(data);
                setUsers(data);
                setLoadingData(false);
            });
        console.log(getData);
    };

    //page handle function
    // const handleChangePage = (
    //     event: React.MouseEvent<HTMLButtonElement> | null,
    //     newPage: number
    // ) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    // change page handler
    const handleChangePage = (event, newPage) => {
        console.log(newPage);
        setPage(newPage);
    };

    // button to open create user
    const openCreateUser = () => {
        navigate('/create-user');
    };

    useEffect(() => {
        setTimeout(() => {
            getUserData();
        }, 3000);
        // getUserData();
    }, []);
    return (
        <>
            <Grid sx={{ margin: '5rem 0 0 0 ', padding: '2rem' }}>
                {/* <Link to="create-user" sx={{ margin: '5rem 0 0 0' }}> */}
                <Button variant="contained" onClick={openCreateUser}>
                    Create User
                </Button>
                {/* </Link> */}
                <TableContainer component={Paper}>
                    <Table
                        sx={{
                            maxWidth: 800,
                            padding: '5rem',
                            margin: 'auto',
                        }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>S.N</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                            </TableRow>
                        </TableHead>
                        {loadingData ? (
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Skeleton
                                            variant="rectangular"
                                            // sx={{ bgcolor: 'grey.900' }}
                                            width={1000}
                                            height={1200}
                                            animation="wave"
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        ) : (
                            <TableBody>
                                {users
                                    .slice(
                                        page * rowsPerPage - rowsPerPage,
                                        page * rowsPerPage
                                    )
                                    .map((user, index) => (
                                        <TableRow
                                            key={user.id}
                                            sx={{
                                                '&:last-child td, &:last-child th':
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell>
                                                {rowsPerPage * (page - 1) +
                                                    index +
                                                    1}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {user.firstname}
                                            </TableCell>
                                            <TableCell align="right">
                                                {user.lastname}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        )}
                    </Table>
                    {/* <Grid container justifyContent="center">
                    <Grid item>
                        <TablePagination
                            component="div"
                            count={users.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Grid> */}
                    <Grid container justifyContent="center" py={3}>
                        <Grid item>
                            <Pagination
                                count={Math.ceil(users?.length / rowsPerPage)}
                                color="secondary"
                                onChange={handleChangePage}
                            />
                        </Grid>
                    </Grid>
                </TableContainer>
            </Grid>
        </>
    );
};

export default Users;
