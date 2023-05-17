import React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TabClientDetails from './TabClientDetails';
import TabADDetails from './TabADDetails';
import TabPanel, {TabProps} from 'components/TabPanel';

// -----------------------------------------------------------------------------

const tabLabel = [
    'Client Details',
    'All Balance',
    'AD Details',
    // 'CS Call Record',
    // 'Instant Post Management',
];

export default function Client () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Box sx={{ borderBottom: 1,
        // borderColor: 'divider',
        }}>
        <Tabs value={value} onChange={handleChange} aria-label="client tabs">
          {tabLabel.map((label, index) => (
                <Tab label={label} {...TabProps(index)} />
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
        <TabADDetails></TabADDetails>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        {tabLabel[3]}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {tabLabel[4]}
      </TabPanel> */}
    </Box>
  );
};