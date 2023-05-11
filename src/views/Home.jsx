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
import { useSelector, useDispatch } from "react-redux";
import { setIsLogin } from '../store/mainSlice';


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