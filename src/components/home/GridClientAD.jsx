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
// icon
// import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
// router
import { Link, useNavigate, useLocation } from "react-router-dom";

import homeScss from "assets/scss/home.module.scss";
import {ClientStatus} from 'utils/fakeData';

// -----------------------------------------------------------------------------

const title = 'Client AD OFF/REST';
const heads = ['Mobile', 'Status'];
const rows = [
    ClientStatus.createData(
        [<Link to='/client' >1122</Link>],
            'OK'),
    ClientStatus.createData(
        [<Link to='/client' >2233</Link>],
        'OFF'),
    ClientStatus.createData(
        [<Link to='/client' >334455</Link>],
        'REST'),
    ClientStatus.createData(
        [<Link to='/client' >456</Link>],
        '-'),
    ClientStatus.createData(
        [<Link to='/client' >5566</Link>],
        '-'),
    ClientStatus.createData(
        [<Link to='/client' >66</Link>],
        '-'),
    ClientStatus.createData(
        [<Link to='/client' >789</Link>],
        '-'),
];

export default function ClientAD() {
    return (
        <Stack spacing={0} sx={{
            display: 'flex',
            '& > :not(style)': {
                width: '35vw',
                bgcolor: '#fff',
                color: '#5D737E',
            },
        }}>
            <Paper variant="outlined" square className={homeScss["title-block"]}>
                <h2>{title}</h2>
            </Paper>

            <Paper variant="outlined" square sx={{
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
                                    key={row.mobile}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left" component="th" scope="row">
                                        {row.mobile}
                                    </TableCell>
                                    <TableCell align='center'>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Stack>
    );
}