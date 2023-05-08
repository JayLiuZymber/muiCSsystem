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

// Mobile Name Type Region2 Created
function createData(mobile, name, type, region2) {
    return { mobile, name, type, region2 };
}

const rows = [
    createData('1122', 'jae_hwan', 'Type1', '-', '2023-05-04 15:25:36'),
    createData('2233', '-', '-', '-', '2023-05-02 15:25:36'),
    createData('334455', 'Ace', '-', '-', '2023-04-21 15:25:36'),
    createData('456', 'Bill', 'Type1', '-', '2023-03-11 15:25:36'),
    createData('5566', 'Clark', 'Type1', '-', '2023-03-10 15:25:36'),
];

export default function AssignedClients() {
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
                <h2>Assigned Clients</h2>
            </Paper>

            <Paper variant="outlined"  square sx={{
                height: 350,
                // overflow: 'hidden',
            }}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{  height: 80 }} >
                            <TableCell align="center">Mobile</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Region2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            {row.mobile}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
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