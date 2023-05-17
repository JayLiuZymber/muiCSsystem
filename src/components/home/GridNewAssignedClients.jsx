import React from 'react';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// router
import { Link, useNavigate, useLocation } from "react-router-dom";

import homeScss from "assets/scss/home.module.scss";
import { AssignedClient } from "utils/fakeData";

// -----------------------------------------------------------------------------

const title = 'New Assigned Clients';
const heads = ['Mobile', 'Name', 'Type', 'Region2', 'Created'];
const rows = [
    AssignedClient.createData(
        [<Link to='/client' >12525353</Link>],
        ['-'],
        'Type1', '-', '2023-05-02 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >2538800000</Link>],
        ['-'],
        '-', '-', '2023-05-01 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >3875850111</Link>],
        ['-'],
        '-', '-', '2023-04-22 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >4858111111</Link>],
        ['-'],
        'Type1', '-', '2023-03-12 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >5859628888</Link>],
        ['-'],
        'Type1', '-', '2023-03-02 15:25:36'),
];

export default function GridNewAssignedClients() {
    
    // router
    const { state } = useLocation();
    // console.log('state', state);
    const navigate = useNavigate();
    
    return (
        <Stack spacing={0} sx={{
            display: 'flex',
            '& > :not(style)': {
                width: '70vw',
                bgcolor: '#fff',
                color: '#5D737E',
            },
        }}>
            <Paper variant="outlined" square className={homeScss["title-block"]}>
                <h2>{title}</h2>
            </Paper>

            <Paper variant="outlined" square
                // className={homeScss["table-block"]}
                sx={{
                    height: 350,
                    overflow: 'auto',
                }}>
                <TableContainer component={Paper} elevation={0}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ height: 80 }} >
                                {heads.map((head) => (
                                    <TableCell key={head} align="center">{head} </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* <TableCell colSpan={1} /> */}
                                    <TableCell align="center" component="th" scope="row">
                                        {row.mobile}
                                    </TableCell>
                                    <TableCell align="center" sx={{ display: 'flex', alignItems: 'center' }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.type}</TableCell>
                                    <TableCell align="center">{row.region2}</TableCell>
                                    <TableCell align="center">{row.created}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Stack>
    );
}