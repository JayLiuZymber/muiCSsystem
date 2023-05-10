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

const title = 'Blog Status';
const heads = [
    'Status', 
    'Update'
];
function createData(status, update) {
    return { status, update };
}
const rows = [
    createData('ON', '2023-05-07 11:22:33'),
    createData('ON', '2023-05-05 11:22:33'),
    createData('ON', '2023-05-03 11:22:33'),
    createData('ON', '2023-05-02 11:22:33'),
    createData('ON', '2023-05-01 11:22:33'),
];

export default function GridBlogStatus() {
    return (
        <Stack spacing={0} sx={{
            display: 'flex',
            '& > :not(style)': {
            width: '35vw',
            bgcolor: '#fff',
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