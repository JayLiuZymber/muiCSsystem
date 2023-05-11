import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Snackbar from '@mui/material/Snackbar';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLogin } from '../store/mainSlice';

import GridNewAssignedClients from './GridNewAssignedClients';
import GridAssignedClients from './GridAssignedClients';
import GridClientAD from './GridClientAD';
import GridClientBlog from './GridClientBlog';
import GridClientFlowerRank from './GridClientFlowerRank';
import GridClientHeartRank from './GridClientHeartRank';


export default function Home(props) {
    const location = useLocation();
    const dispatch = useDispatch();

    const isLogin = useSelector((state) => state.main.isLogin);

    const [showSnackbar, setShowSnackbar] = React.useState(false);


    if (isLogin) {
        setShowSnackbar(location.state?.showSnackbar ?? false);
        dispatch(setIsLogin({
            value: false
        }))

        console.log(`isLogin: ${isLogin}`);

    }

    return (
        <div>
            <Box sx={{ flexGrow: 0, m: 2, width: '70vw' }}>
                <Grid container rowSpacing={2}
                    columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid display="flex" xs={12} sm={12}>
                        <GridNewAssignedClients></GridNewAssignedClients>
                    </Grid>
                    <Grid display="flex" xs={12} sm={12}>
                        <GridAssignedClients></GridAssignedClients>
                    </Grid>
                    <Grid display="flex" xs={6} sm={6}>
                        <GridClientAD></GridClientAD>
                    </Grid>
                    <Grid display="flex" xs={6} sm={6}>
                        <GridClientBlog></GridClientBlog>
                    </Grid>
                    <Grid display="flex" xs={6} sm={6}>
                        <GridClientFlowerRank></GridClientFlowerRank>
                    </Grid>
                    <Grid display="flex" xs={6} sm={6}>
                        <GridClientHeartRank></GridClientHeartRank>
                    </Grid>
                </Grid>
            </Box>

            <Snackbar
                open={showSnackbar}
                onClose={() => setShowSnackbar(false)}
                autoHideDuration={3000}
                sx={{ width: '100%' }}
                message="Login Success!"
            />
        </div>
    )
};