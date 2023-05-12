import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TabClientDetails from './TabClientDetails';

const tabLabel = [
    'Client Details',
    'All Balance',
    'AD Details',
    'CS Call Record',
    'Instant Post Management',
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Client () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1,
        // borderColor: 'divider',
        }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabLabel.map((label, index) => (
                <Tab label={label} {...a11yProps(index)} />
            ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabClientDetails></TabClientDetails>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabLabel[1]}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {tabLabel[2]}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {tabLabel[3]}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {tabLabel[4]}
      </TabPanel>
    </Box>
  );
};