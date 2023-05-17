import React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TabClientsList from './TabClientsList';
import TabPanel, {TabProps} from 'components/TabPanel';

// -----------------------------------------------------------------------------

const tabLabel = [
  'Clients List',
];

export default function ClientsList () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="clients list tabs">
          {tabLabel.map((label, index) => (
                <Tab label={label} {...TabProps(index)} />
            ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabClientsList></TabClientsList>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        Item 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 3
      </TabPanel> */}
    </Box>
  );
};