import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import NewAssignedClients from './NewAssignedClients';
import AssignedClients from './AssignedClients';
import ClientAD from './ClientAD';
import ClientBlog from './ClientBlog';

export default function Home () {
    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid display="flex" xs={12}>
                    <NewAssignedClients></NewAssignedClients>
                </Grid>
                <Grid display="flex" xs={12}>
                    <AssignedClients></AssignedClients>
                </Grid>
                <Grid display="flex" xs={6}>
                    <ClientAD></ClientAD>
                </Grid>
                <Grid display="flex" xs={6}>
                    <ClientBlog></ClientBlog>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
};