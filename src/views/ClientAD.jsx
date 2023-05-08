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

// Mobile Status
function createData(mobile, status) {
    return { mobile, status };
}

const title = 'Client AD OFF/REST';
const heads = ['Mobile', 'Status'];
const rows = [
    createData('1122', 'OK'),
    createData('2233', 'OFF'),
    createData('334455', 'REST'),
    createData('456', '-'),
    createData('5566', '-'),
];

export default function ClientAD() {
    return (
        <Stack spacing={0} sx={{
            display: 'flex',
            '& > :not(style)': {
            width: '100%',
            // bgcolor: '#777',
            color: '#5D737E',
            },
        }}>
            <Paper variant="outlined" square sx={{
                height: 50,
                pl: 2,
            }}>
                <h2>{title}</h2>
            </Paper>

            <Paper variant="outlined"  square sx={{
                height: 350,
                // overflow: 'hidden',
            }}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 280 }} aria-label="simple table">
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
                        key={row.mobile}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
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