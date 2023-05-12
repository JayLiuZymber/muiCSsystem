import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const title = 'Client Detail';

export default function GridClientDetail(props) {
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
            }}>
                <h2 style={{ paddingLeft: "20px" }}>{title}</h2>
            </Paper>
        </Stack>
    )
};
