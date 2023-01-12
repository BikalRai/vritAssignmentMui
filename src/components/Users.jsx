import {
    CircularProgress,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const getUserData = () => {
        setLoadingData(true);
        fetch('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users')
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'users');
                setUsers(data);
                setLoadingData(false);
            });
    };

    //page handle function
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <>
            <TableContainer component={Paper}>
                <Table
                    sx={{ maxWidth: 650, padding: '2rem', margin: 'auto' }}
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
                        <Grid container justifyContent="center">
                            <Grid item>
                                <CircularProgress />
                            </Grid>
                        </Grid>
                    ) : (
                        <TableBody>
                            {users
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
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
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell component="th" scope="row">
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
                <Grid container justifyContent="center">
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
                </Grid>
            </TableContainer>
        </>
    );
};

export default Users;
