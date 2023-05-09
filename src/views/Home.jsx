import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import NewAssignedClients from './NewAssignedClients';
import AssignedClients from './AssignedClients';
import ClientAD from './ClientAD';
import ClientBlog from './ClientBlog';
import ClientFlowerRank from './ClientFlowerRank';
import ClientHeartRank from './ClientHeartRank';

export default function Home () {
    return (
        <div>
        <Box sx={{ flexGrow: 0, m:2,  width: '70vw'}}>
            <Grid container rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid display="flex" xs={12} sm={12}>
                    <NewAssignedClients></NewAssignedClients>
                </Grid>
                <Grid display="flex" xs={12} sm={12}>
                    <AssignedClients></AssignedClients>
                </Grid>
                <Grid display="flex" xs={6} sm={6}>
                    <ClientAD></ClientAD>
                </Grid>
                <Grid display="flex" xs={6} sm={6}>
                    <ClientBlog></ClientBlog>
                </Grid>
                <Grid display="flex" xs={6} sm={6}>
                    <ClientFlowerRank></ClientFlowerRank>
                </Grid>
                <Grid display="flex" xs={6} sm={6}>
                    <ClientHeartRank></ClientHeartRank>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
};