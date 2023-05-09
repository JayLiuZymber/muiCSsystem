import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import NewAssignedClients from './NewAssignedClients';
import AssignedClients from './AssignedClients';
import ClientAD from './ClientAD';
import ClientBlog from './ClientBlog';
import ClientFlowerRank from './ClientFlowerRank';
import ClientHeartRank from './ClientHeartRank';
import Snackbar from '@mui/material/Snackbar';
import { useLocation } from "react-router-dom";


export default function Home(props) {
    const location = useLocation();

    const [showSnackbar, setShowSnackbar] = React.useState(location.state?.showSnackbar ?? false);

    return (
        <div>
            <Box sx={{ flexGrow: 1, m: 2 }}>
                <Grid container spacing={2}>
                    <Grid display="flex" xm={12}>
                        <NewAssignedClients></NewAssignedClients>
                    </Grid>
                    <Grid display="flex" xm={12}>
                        <AssignedClients></AssignedClients>
                    </Grid>
                    <Grid display="flex" xm={6}>
                        <ClientAD></ClientAD>
                    </Grid>
                    <Grid display="flex" xm={6}>
                        <ClientBlog></ClientBlog>
                    </Grid>
                    <Grid display="flex" xm={6}>
                        <ClientFlowerRank></ClientFlowerRank>
                    </Grid>
                    <Grid display="flex" xm={6}>
                        <ClientHeartRank></ClientHeartRank>
                    </Grid>
                </Grid>
            </Box>

            <Snackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        autoHideDuration={5000}
        sx={{ width: '100%' }}
        message="Login Success!"
      />
        </div>
    )
};