import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
// router
import { Outlet } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setSnackbar } from "store/mainSlice";

import SideList from "components/SideList";
import TopBar from "components/TopBar";
// import BottomBar from "components/BottomBar";

function App() {
  const isSnackbarOpen = useSelector((state) => state.main.snackbar.isOpen);
  const snackbarMsg = useSelector((state) => state.main.snackbar.msg);

  const dispatch = useDispatch();

  return (
    <Box>
      <Box sx={{ display: "flex", position:'fixed', top:0, left:0}}>
        <SideList></SideList>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1, position:'absolute', left: '20vw', bgcolor:'#fff' }}>
        <TopBar></TopBar>
        <Outlet />
      </Box>

      <Snackbar
        open={isSnackbarOpen}
        onClose={() =>
          dispatch(
            setSnackbar({
              isOpen: false,
              msg: "",
            })
          )
        }
        autoHideDuration={3000}
        sx={{ width: "100%" }}
        message={snackbarMsg}
      />
      {/* <BottomBar></BottomBar> */}
    </Box>
  );
}

export default App;
