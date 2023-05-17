import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import Card from '@mui/material/Card/Card';
// import Paper from '@mui/material/Paper'

import GridClientDetail from 'components/client/GridClientDetail';
import GridWalletDetail from 'components/client/GridWalletDetail';
import GridComplainRecord from 'components/client/GridComplainRecord';
import GridADStatus from 'components/client/GridADStatus';
import GridBlogStatus from 'components/client/GridBlogStatus';

// -----------------------------------------------------------------------------
export default function TabClientDetails(props) {
    return (
        <div>
        <Box sx={{ flexGrow: 1, m:2,  width: '70vw',
            // bgcolor: '#fff',
            // bgcolor: '#0f0',
            }}>
            <h3>TEST-STAGE-CLIENT  (886970974617)</h3>
            {/*
            xs, extra-small: 0px
            sm, small: 600px
            md, medium: 900px
            lg, large: 1200px
            xl, extra-large: 1536px
            */}
            <Grid container rowSpacing={2} columns={12}
                columnSpacing={0}
                // columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
                // justifyContent="space-between"
                // style={{
                //     overflowX: "hidden",
                // }}
                >
                <Grid display="flex" xs={6} sm={6} md={6}>
                    <GridClientDetail></GridClientDetail>
                </Grid>
                <Grid display="flex" xs={6} sm={6} md={6}>
                    <GridWalletDetail></GridWalletDetail>
                </Grid>
                <Grid display="flex" xs={12} sm={12} md={12}>
                    <GridComplainRecord></GridComplainRecord>
                </Grid>
                <Grid display="flex" xs={6} sm={6} md={6}>
                    <GridADStatus></GridADStatus>
                </Grid>
                <Grid display="flex" xs={6} sm={6} md={6}>
                    <GridBlogStatus></GridBlogStatus>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
};
