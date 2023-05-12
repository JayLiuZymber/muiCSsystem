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
import IconButton from '@mui/material/IconButton';
// icon
// import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';

import homeScss from "assets/scss/home.module.scss";
import FakeData from 'utils/fakeData';

const title = 'Client Heart Rank';
const heads = ['#', 'Post ID', 'Mobile'];
const rows = [
    FakeData.ClientRank.createData('#1', '1', '1122'),
    FakeData.ClientRank.createData('#2', '15', '2233'),
    FakeData.ClientRank.createData('#10', '12', '334455'),
    FakeData.ClientRank.createData('#15', '25', '456'),
    FakeData.ClientRank.createData('#19', '88', '5566'),
];

export default function ClientHeartRank() {
/*
W3Schools Tryit Editor
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_date_all
*/
    const pageLoadTime = new Date().toLocaleString('sv-SE'); //2023-05-08 15:23:26

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <Stack spacing={0} sx={{
            display: 'flex',
            '& > :not(style)': {
            width: '35vw',
            // minWidth: 300,
            bgcolor: '#fff',
            color: '#5D737E',
            },
        }}>
            <Paper variant="outlined" className={homeScss["title-block"]} square sx={{
                height: 50,
            }}>
                
                <h2>{title}
                    <IconButton onClick={refreshPage}
                        aria-label="refresh page" component="label">
                        <RefreshIcon />
                    </IconButton>
                </h2>
            </Paper>

            <Paper variant="outlined"  square sx={{
                height: 350,
                overflow: 'auto',
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
                            {row.hashtag}
                        </TableCell>
                        <TableCell align='center'>{row.postid}</TableCell>
                        <TableCell align='left'>{row.mobile}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>

            <Paper align='right' variant="" square sx={{
                height: 50,
            }}>
                Update: {pageLoadTime}
            </Paper>
        </Stack>
    );
}