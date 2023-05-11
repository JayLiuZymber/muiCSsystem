import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import GridClientDetail from './GridClientDetail';
import GridWalletDetail from './GridWalletDetail';
import GridComplainRecord from './GridComplainRecord';
import GridADStatus from './GridADStatus';
import GridBlogStatus from './GridBlogStatus';

export default function TabClientDetails(props) {
    return (
        <div>
        <Box sx={{ flexGrow: 0, m:2,  width: '70vw'}}>
            <h3>TEST-STAGE-CLIENT  (886970974617)</h3>
            <Grid container rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid display="flex" xs={6} sm={6}>
                    <GridClientDetail></GridClientDetail>
                </Grid>
                <Grid display="flex" xs={6} sm={6}>
                    <GridWalletDetail></GridWalletDetail>
                </Grid>
                <Grid display="flex" xs={12} sm={12}>
                    <GridComplainRecord></GridComplainRecord>
                </Grid>
                <Grid display="flex" xs={6} sm={6}>
                    <GridADStatus></GridADStatus>
                </Grid>
                <Grid display="flex" xs={6} sm={6}>
                    <GridBlogStatus></GridBlogStatus>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
};
