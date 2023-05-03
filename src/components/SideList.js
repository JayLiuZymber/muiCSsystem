import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
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

export default function SideList() {
  const [bOpenClient, setOpenClient] = React.useState(true);
  const [bOpenSetting, setOpenSetting] = React.useState(true);

  const clientsClick = () => {
    setOpenClient(!bOpenClient);
  };

  const settingsClick = () => {
    setOpenSetting(!bOpenSetting);
  };
  
  return (
    <Box sx={{ height: "100%" }} bgcolor="#36373F" color="#fff">
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
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton onClick={clientsClick}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clients" />
          {bOpenClient ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={bOpenClient} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Clients List" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={settingsClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {bOpenSetting ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={bOpenSetting} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Login Logs" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
