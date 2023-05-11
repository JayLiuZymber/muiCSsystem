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

// Mobile Name Type Region2 Created
function createData(mobile, name, type, region2, created) {
    return { mobile, name, type, region2, created };
}

const title = 'New Assigned Clients';
const heads = ['Mobile', 'Name', 'Type', 'Region2', 'Created'];
const rows = [
    createData('12525353', ['-'],
        'Type1', '-', '2023-05-02 15:25:36'),
    createData('25388', ['-'],
        '-', '-', '2023-05-01 15:25:36'),
    createData('38758', ['-'],
        '-', '-', '2023-04-22 15:25:36'),
    createData('4858', ['-'],
        'Type1', '-', '2023-03-12 15:25:36'),
    createData('5859628', ['-'],
        'Type1', '-', '2023-03-02 15:25:36'),
];

export default function GridNewAssignedClients() {
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
                pl: 2,
                // alignItems: 'center',
                // verticalAlign: 'middle',
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
                        key={row.mobile}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left" component="th" scope="row">
                            {row.mobile}
                        </TableCell>
                        <TableCell align="left"sx={{display: 'flex', alignItems: 'center'}}>
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