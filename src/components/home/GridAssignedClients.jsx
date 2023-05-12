import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';

import homeScss from "assets/scss/home.module.scss";
import FakeData from "utils/fakeData";

// Mobile Name Type Region2 Created

const title = 'Assigned Clients';
const heads = ['Mobile', 'Name', 'Type', 'Region2'];
const rows = [
    FakeData.createData('1122', [<ChatBubbleIcon key='jae_hwan' />, 'jae_hwan'],
        'Type1', '-', '2023-05-04 15:25:36'),
    FakeData.createData('2233', ['-'],
        '-', '-', '2023-05-02 15:25:36'),
    FakeData.createData('334455', [<ChatBubbleIcon key='Ace' />, 'Ace'],
        '-', '-', '2023-04-21 15:25:36'),
    FakeData.createData('456', [<ChatBubbleIcon key='Bill' />, 'Bill'],
        'Type1', '-', '2023-03-11 15:25:36'),
    FakeData.createData('5566', [<ChatBubbleIcon key='Clark' />, 'Clark'],
        'Type1', '-', '2023-03-10 15:25:36'),
];

export default function AssignedClients() {
    return (
        <Stack spacing={0} sx={{
            display: 'flex',
            '& > :not(style)': {
            width: '70vw',
            bgcolor: '#fff',
            color: '#5D737E',
            },
        }}>
            <Paper variant="outlined" className={homeScss["title-block"]} square sx={{
                height: 50,
            }}>
                <h2>{title}</h2>
            </Paper>

            <Paper variant="outlined"  square sx={{
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