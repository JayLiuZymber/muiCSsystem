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
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
// router
import { Link, useNavigate, useLocation } from "react-router-dom";

import homeScss from "assets/scss/home.module.scss";
import { AssignedClient } from "utils/fakeData";

const title = 'Assigned Clients';
const heads = ['Mobile', 'Name', 'Type', 'Region2'];
const rows = [
    AssignedClient.createData(
        [<Link to='/client' >1122</Link>],
        [<ChatBubbleIcon key='jae_hwan' />, 'jae_hwan'],
        'Type1', '-', '2023-05-04 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >2233</Link>],
        ['-'],
        '-', '-', '2023-05-02 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >334455</Link>],
        [<ChatBubbleIcon key='Ace' />, 'Ace'],
        '-', '-', '2023-04-21 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >456</Link>],
        [<ChatBubbleIcon key='Bill' />, 'Bill'],
        'Type1', '-', '2023-03-11 15:25:36'),
    AssignedClient.createData(
        [<Link to='/client' >5566</Link>],
        [<ChatBubbleIcon key='Clark' />, 'Clark'],
        'Type1', '-', '2023-03-10 15:25:36'),
];

export default function AssignedClients() {
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

            <Paper variant="outlined" square sx={{
                height: 350,
                overflow: 'auto',
            }}>
                <TableContainer component={Paper}>
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
                        <TableCell align="left" sx={{display: 'flex', alignItems: 'center'}}>
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.type}</TableCell>
                        <TableCell align="center">{row.region2}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
        </Stack>
    );
}