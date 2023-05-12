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

const title = 'Complain Record';
const heads = [
    'Complain',
    'Status',
    'Remark',
    'Description',
    'Created',
    'Modified',
];
function createData(complain, status, remark, description, created, modified) {
    return { 
        complain   ,
        status     ,
        remark     ,
        description,
        created    ,
        modified   ,
     };
}
const rows = [
    createData('-', '-', '-', '-', '-', '-'),
    createData('-', '-', '-', '-', '-', '-'),
    createData('-', '-', '-', '-', '-', '-'),
    createData('-', '-', '-', '-', '-', '-'),
];

export default function GridComplainRecord() {
    return (
        <Stack spacing={0} sx={{
            display: 'flex',
            '& > :not(style)': {
            width: '70vw',
            bgcolor: '#fff',
            color: '#5D737E',
            },
        }}>
            <Paper variant="outlined" square sx={{
                height: 50,
                // alignItems: 'center',
                // verticalAlign: 'middle',
            }}>
                <h2 style={{ paddingLeft: "20px" }}>{title}</h2>
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
                        key={row.complain}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left" component="th" scope="row">
                            {row.status}
                        </TableCell>
                        <TableCell align="center">{row.remark}</TableCell>
                        <TableCell align="center">{row.description}</TableCell>
                        <TableCell align="center">{row.created}</TableCell>
                        <TableCell align="center">{row.modified}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
        </Stack>
    );
}