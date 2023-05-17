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
// router
import { Link, useNavigate, useLocation } from "react-router-dom";

import homeScss from "assets/scss/home.module.scss";
import {ClientFlower} from 'utils/fakeData';

// -----------------------------------------------------------------------------

const title = 'Client Flower Rank';
const heads = ['#', 'Mobile', 'Name', 'Flower'];
const rows = [
    ClientFlower.createData(
        '-',
        [<Link to='/client' >1122</Link>], 
        'asdsadd',
        'OK'),
    ClientFlower.createData(
        '-',
        [<Link to='/client' >2233</Link>], 
        'bbbbb',
        'OFF'),
    ClientFlower.createData(
        '-',
        [<Link to='/client' >334455</Link>], 
        'cccdd',
        'REST'),
    ClientFlower.createData(
        '-',
        [<Link to='/client' >456</Link>],
        'dddfefefewf', 
        '-'),
    ClientFlower.createData(
        '-',
        [<Link to='/client' >5566</Link>],
        'eeeeeeeefe', 
        '-'),
    ClientFlower.createData(
        '-',
        [<Link to='/client' >78</Link>],
        'fffffwwww', 
        '-'),
];

export default function ClientFlowerRank() {
/*
W3Schools Tryit Editor
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_date_all
*/
    const pageLoadTime = new Date().toLocaleString('sv-SE'); //2023-05-08 15:23:26
    
    const [refresh, setRefresh] = React.useState(0)
    function refreshPage() {
        // window.location.reload(false);
        setRefresh(refresh+1);
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
            <Paper variant="outlined" square className={homeScss["title-block"]}>
                <h2>{title}
                    <IconButton onClick={refreshPage}
                        aria-label="refresh page" component="label">
                        <RefreshIcon />
                    </IconButton>
                </h2>
            </Paper>

            <Paper variant="outlined" square sx={{
                height: 350,
                overflow: 'auto',
            }}>
                <TableContainer component={Paper} elevation={0}>
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
                        key={row.hashtag}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left" component="th" scope="row">
                            {row.hashtag}
                        </TableCell>
                        <TableCell align='left'>{row.mobile}</TableCell>
                        <TableCell align='center'>{row.name}</TableCell>
                        <TableCell align='center'>{row.flower}</TableCell>
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