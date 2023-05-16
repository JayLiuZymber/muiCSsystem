import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// router
import { useLocation } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setIsLogin } from 'store/mainSlice';

import GridNewAssignedClients from 'components/home/GridNewAssignedClients';
import GridAssignedClients from 'components/home/GridAssignedClients';
import GridClientAD from 'components/home/GridClientAD';
import GridClientBlog from 'components/home/GridClientBlog';
import GridClientFlowerRank from 'components/home/GridClientFlowerRank';
import GridClientHeartRank from 'components/home/GridClientHeartRank';


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
        <>
            <Box sx={{ flexGrow: 0, m: 2, width: '70vw', minHeight: '100vh',
                // bgcolor: '#fff',
                }}>
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
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                Login Success!
                </Alert>
          </Snackbar>
        </>
    )
};