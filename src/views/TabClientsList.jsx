import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';

const columns = [
  // { field: 'id', headerName: 'ID', width: 1 },
  {
    field: 'mobile', 
    headerName: 'Mobile', 
    width: 200,
    // editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    // editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
    // editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'region2',
    headerName: 'Region2',
    width: 150,
    // editable: true,
    headerAlign: 'center',
    align: 'center',
  },
];

const rows = [
  { id: 1, mobile: '12', name: 'Snow', type: 'Type1', region2: '-' },
  { id: 2, mobile: '2', name: 'Lannister', type: '-', region2: '-' },
  { id: 3, mobile: '3435', name: 'Lannister', type: '-', region2: '-' },
  { id: 4, mobile: '43', name: 'Stark', type: '-', region2: '-' },
  { id: 5, mobile: '56', name: 'Targaryen', type: '-', region2: '-' },
  { id: 6, mobile: '68', name: '-', type: '-', region2: '-' },
  { id: 7, mobile: '7', name: 'Clifford', type: '-', region2: '-' },
  { id: 8, mobile: '89', name: 'Frances', type: '-', region2: '-' },
  { id: 9, mobile: '9001', name: 'Roxie', type: '-', region2: '-' },
  { id: 10, mobile: '1011', name: 'A', type: '-', region2: '-' },
  { id: 11, mobile: '1101', name: 'B', type: '-', region2: '-' },
  { id: 13, mobile: '1301', name: 'C', type: '-', region2: '-' },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 45,
  flexGrow: 1,
}));

export default function TabClientsList() {
  const defaultProps = {
    options: rows.name,
    getOptionLabel: (option) => option.mobile,
  };
  const flatProps = {
    options: rows.map((option) => option.mobile),
  };
  const [value, setValue] = React.useState(null);

  return (
    <Box sx={{ height: 400, width: '70vw', color:'#5D737E' }}>
      <Grid container rowSpacing={1}>
        <Grid display="flex" xs={6} sm={6}>
          <h3>Clients List ({rows.length})</h3>
        </Grid>
        <Grid display="flex" xs={6} sm={6}>
          <Autocomplete
            // {...defaultProps}
            freeSolo
            sx={{
              minWidth: 200, }}
            id="include-input-in-list"
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="Mobile or Name" 
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="end">
                //       <SearchIcon />
                //     </InputAdornment>
                //   ),
                // }}
                variant="standard"
                />
            )}
          />
          <SearchIcon sx={{my:2}}/>
        </Grid>
      </Grid>      
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}