import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import homeScss from "assets/scss/home.module.scss";

// -----------------------------------------------------------------------------

const title = 'Wallet Detail';

export default function GridWalletDetail(props) {
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
        </Stack>
    )
};
