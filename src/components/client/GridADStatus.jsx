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

import homeScss from "assets/scss/home.module.scss";
import {Status} from 'utils/fakeData';

const title = 'AD Status';
const heads = [
    'Status', 
    'Update'
];
const rows = [
    Status.createData('ON', '2023-04-08 11:22:33'),
    Status.createData('ON', '2023-04-05 11:22:33'),
    Status.createData('ON', '2023-04-03 11:22:33'),
    Status.createData('ON', '2023-04-02 11:22:33'),
    Status.createData('ON', '2023-04-01 11:22:33'),
];

export default function GridADStatus() {
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
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{  height: 80 }} >
                            {heads.map((head) => (
                                <TableCell key={head} align="center">{head} </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow 
                        key={row.update}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align='center'>{row.status}</TableCell>
                        <TableCell align='center'>{row.update}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
        </Stack>
    );
}