import React from 'react';
import dayjs from 'dayjs';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';

import CustomNoRowsOverlay from 'components/CustomDateGrid';

// Status Reason Timestamp
const columns = [
  // { field: 'id', headerName: 'ID', width: 1 },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    // editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'reason',
    headerName: 'Reason',
    width: 200,
    // editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'timestamp',
    headerName: 'Timestamp',
    width: 200,
    // editable: true,
    headerAlign: 'center',
    align: 'center',
  },
];

const rows = [
  { id: 1, status: 'Success', reason: '-', timestamp: '2023-05-10 11:02:03'},
  { id: 2, status: 'Success', reason: '-', timestamp: '2023-05-09 11:02:03'},
  { id: 3, status: 'Success', reason: '-', timestamp: '2023-05-08 11:02:03'},
  { id: 4, status: 'Success', reason: '-', timestamp: '2023-05-06 22:02:03'},
  { id: 5, status: 'Success', reason: '-', timestamp: '2023-05-06 11:02:03'},
  { id: 6, status: 'Failed', reason: "Wrong 'password'", timestamp:  '2023-05-05 11:02:03'},
  { id: 7, status: 'Success', reason: '-', timestamp: '2023-05-03 11:02:03'},
  { id: 8, status: 'Success', reason: '-', timestamp: '2023-05-02 11:02:03'},
  { id: 9, status: 'Success', reason: '-', timestamp: '2023-05-01 11:02:03'},
  { id: 10, status: 'Success', reason: '-', timestamp: '2023-04-21 11:02:03'},
  { id: 11, status: 'Success', reason: '-', timestamp: '2023-04-11 11:02:03'},
  { id: 12, status: 'Success', reason: '-', timestamp: '2023-04-01 11:02:03'},
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 45,
  flexGrow: 1,
}));

export default function LoginLogs () {
    const defaultProps = {
      options: rows.reason,
      getOptionLabel: (option) => option.status,
    };
      const flatProps = {
      options: rows.map((option) => option.status),
    };
    const [dateStart, setDateStart] = React.useState(dayjs('2022-04-17'));
    const [dateEnd, setDateEnd] = React.useState(dayjs());

  return (
    <Box sx={{ minHeight: 520, width:'70vw', m:2, color:'#5D737E'}}>
    {/* <Box sx={{ height: 400, width: '70vw' }}> */}
      <Grid container rowSpacing={0}>
        <Grid display="flex" xs={12} sm={12}>
          <h3>Login Logs ({rows.length})</h3>
        </Grid>
        <Grid display="flex" xs={12} sm={12}>
          <h4>Duration</h4>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dateStart}
              onChange={(newValue) => setDateStart(newValue)}
            />
          </LocalizationProvider>
          <h4>～</h4>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
              value={dateEnd}
              onChange={(newValue) => setDateEnd(newValue)}
            />
          </LocalizationProvider>
          <Button variant="outlined" sx={{m:2}}>Filter</Button>
        </Grid>
      </Grid>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 20]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
    </Box>
  );
};