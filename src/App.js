import React from "react";
import "./App.css";
import Box from "@mui/material/Box";

// router
import { Outlet } from "react-router-dom";
import SideList from "./components/SideList";
import TopBar from "./components/TopBar";
// import BottomBar from "./components/BottomBar";

import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setSnackbar } from "./store/mainSlice";

function App() {
  const isSnackbarOpen = useSelector((state) => state.main.snackbar.isOpen);
  const snackbarMsg = useSelector((state) => state.main.snackbar.msg);

  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex" }}>
      <SideList></SideList>
      <Box component="main" sx={{ flexGrow: 1, bgcolor:'#fff' }}>
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
