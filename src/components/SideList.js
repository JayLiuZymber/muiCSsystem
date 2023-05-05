import React, {useState} from "react";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

// router
import { Link } from 'react-router-dom'

export default function SideList() {
  const [bOpenClient, setOpenClient] = React.useState(true);
  const [bOpenSetting, setOpenSetting] = React.useState(true);

  const [listRoot, setListRoot] = useState([{
      title: "Home", link: "/home", icon: <HomeIcon />
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

  const clientClick = (event) => {
    setOpenClient(!bOpenClient);
  };

  const settingClick = (event) => {
    setOpenSetting(!bOpenSetting);
  };

  return (
    <Box sx={{ height: "100vh" }} bgcolor="#36373F" color="#fff">
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
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h2>CS System</h2>
          </ListSubheader>
        }
      >
        
        <ListItemButton>
          <ListItemIcon>
            {/* <HomeIcon /> */}
            {listRoot[0].icon}
          </ListItemIcon>
          <ListItemText primary={listRoot[0].title} />
        </ListItemButton>

        <ListItemButton onClick={clientClick}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clients" />
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
                    <ListItemButton key={index} sx={{ pl: 2 }}>
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

        <ListItemButton onClick={settingClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
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
                    <ListItemButton key={index} sx={{ pl: 2 }}>
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
