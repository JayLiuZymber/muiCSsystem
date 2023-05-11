import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { bgcolor } from '@mui/system';

// router
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { removeUserInfo } from "../store/mainSlice";
// cookie
import Cookie from "js-cookie";

const menuList = [
  '',
  'Login Logs',
  'Log out',
];

export default function TopBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // router
  const { state } = useLocation();
  // console.log('state', state);
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  const name = useSelector((state) => state.main.user_info.name);
  const cs_id = useSelector((state) => state.main.user_info.cs_id);
  // console.log('name', name);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    // show menu
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    // hide menu
    setAnchorEl(null);

    // console.log('event.target.id', event.target.id);
    const id=event.target.id;
    switch(id){
      case menuList[1]:
        navigate('/logs');
        break;
      case menuList[2]:
        Cookie.remove("name");
        Cookie.remove("cs_id");
        dispatch(removeUserInfo());
        navigate('/login');
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        /> */}
      </FormGroup>
      <AppBar position="static" sx={{color:'#5D737E', bgcolor:'#fff'}}>
        <Toolbar>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Overview
          </Typography>
          {auth && (
            <div>｜
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Box align="left">
                  {Cookie.get("name")}<br />
                  {Cookie.get("cs_id")}
                </Box>
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* bug name cs_id is empty */}
                <MenuItem>
                  {Cookie.get("name")}<br />
                  {Cookie.get("cs_id")}
                  </MenuItem>
                <MenuItem id={menuList[1]} onClick={handleClose}>{menuList[1]}</MenuItem>
                <MenuItem id={menuList[2]} onClick={handleClose}>{menuList[2]}</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}