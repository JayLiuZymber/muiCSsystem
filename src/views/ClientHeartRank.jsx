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
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';

// # Post ID Mobile
function createData(hashtag, postid, mobile) {
    return { hashtag, postid, mobile };
}

const title = 'Client Heart Rank';
const heads = ['#', 'Post ID', 'Mobile'];
const rows = [
    createData('#1', '1', '1122'),
    createData('#2', '15', '2233'),
    createData('#10', '12', '334455'),
    createData('#15', '25', '456'),
    createData('#19', '88', '5566'),
];

export default function ClientHeartRank() {
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
                <h2>{title}
                    <IconButton aria-label="refresh page" component="label">
                        <RefreshIcon />
                    </IconButton>
                </h2>
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
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            {row.hashtag}
                        </TableCell>
                        <TableCell align='center'>{row.postid}</TableCell>
                        <TableCell align='center'>{row.mobile}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
        </Stack>
    );
}