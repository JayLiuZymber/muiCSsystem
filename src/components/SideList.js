import React, {useState} from "react";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Box } from "@mui/material";
// icon
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// router
import { Link } from 'react-router-dom'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setTopbar } from "store/mainSlice";

const title = 'CS System';

export default function SideList() {
  const dispatch = useDispatch();

  function setTopbarTitle(text) {
    dispatch(setTopbar({
        title: text,
    }))
  }
  /*
  const handleClickItem = (event) => {
    console.log(event);
    // console.log('event.target.id', event.target.id); //id='' ???
    const id=event.target.id;
    switch (id) {
      case "Home":
        setTopbarTitle("Overview")
        break;
      case "Client":
        setTopbarTitle("Client");
        break;
      case "Setting":
        setTopbarTitle("Setting");
        break;
    }
  }*/

  const primarys = [
    "Home",
    "Clients",
    "Settings",
  ]
  const [listRoot, setListRoot] = useState([{
      title: "Home", link: "/", icon: <HomeIcon />
    },
  ]);
  const [listClients, setListClients] = useState([{
      title: "Clients List", link: "/clients", icon: ''
    },
  ]);
  const [listSettings, setListSettings] = useState([{
      title: "Login Logs", link: "/logs", icon: ''
    },
  ]);

  const [bOpenClient, setOpenClient] = React.useState(true);
  const [bOpenSetting, setOpenSetting] = React.useState(true);
  const handleClickClient = (event) => {
    setOpenClient(!bOpenClient);
  };

  const handleClickSetting = (event) => {
    setOpenSetting(!bOpenSetting);
  };

  return (
    <Box bgcolor="#36373F" color="#fff" height={'100vh'}>
       <ThemeProvider
        theme={createTheme({
          // components: {
          //   MuiListItemButton: {
          //     defaultProps: {
          //       disableTouchRipple: true,
          //     },
          //   },
          // },
          palette: {
            mode: 'dark',
            primary: { main: '#525465' },
            background: { paper: '#36373F' },
          },
        })}
      >
      <List
        sx={{ width: "20vw", minWidth: 200 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader // sx={{ justifyContent: 'center', }} //not work
            component="div" id="nested-list-subheader">
            <h2>{title} </h2>
          </ListSubheader>
        }
      >
        
        {listRoot.map((item,index) => {
          return (
          <Link to={item.link} 
            style={{ textDecoration: 'none', color: '#fff' }} >
            <ListItemButton onClick={() => setTopbarTitle("Overview")}>
              <ListItemIcon>
                {/* <HomeIcon /> */}
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </Link>
          )
        })}

        <ListItemButton onClick={handleClickClient}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={primarys[1]} />
          {bOpenClient ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={bOpenClient} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItemButton sx={{ pl: 2 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Clients List" />
            </ListItemButton> */}
            {listClients.map((item,index) => {
              return (
                <Link to={item.link} key={index}
                  style={{ textDecoration: 'none', color: '#fff' }} >
                  <ListItem disablePadding key={index}>
                    <ListItemButton key={index} sx={{ pl: 2 }} 
                      onClick={() => setTopbarTitle("Clients")}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickSetting}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={primarys[2]} />
          {bOpenSetting ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={bOpenSetting} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItemButton id="Login" sx={{ pl: 2 }} onClick={itemClick()}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Login Logs" /> */}
            {/* </ListItemButton> */}
            {listSettings.map((item,index) => {
              return (
                <Link to={item.link} key={index}
                  style={{ textDecoration: 'none', color: '#fff' }} >
                  <ListItem disablePadding key={index}>
                    <ListItemButton key={index} sx={{ pl: 2 }}
                      onClick={() => setTopbarTitle("Settings")}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.title}/>
                    </ListItemButton>
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </Collapse>
      </List>
      </ThemeProvider>
    </Box>
  );
}
