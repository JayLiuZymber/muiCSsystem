import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const columns = [
  // { field: 'id', headerName: 'ID', width: 1 },
  {
    field: 'mobile', 
    headerName: 'Mobile', 
    width: 200,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
    editable: true,
  },
  {
    field: 'region2',
    headerName: 'Region2',
    width: 100,
    editable: true,
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
  { id: 8, mobile: '99', name: 'Frances', type: '-', region2: '-' },
  { id: 9, mobile: '1001', name: 'Roxie', type: '-', region2: '-' },
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
  const count = 79;

  return (
    <Box sx={{ height: 400, width: '70vw' }}>
      <Grid container rowSpacing={1}>
        <Grid display="flex" xs={6} sm={6}>
          <h3>Clients List ({count})</h3>
        </Grid>
        <Grid display="flex" xs={6} sm={6} sx={{
          // textAlign: 'right', 
          // alignItems: 'right', 
        }}>
          <Autocomplete
            // {...defaultProps}
            sx={{
              minWidth: 200, }}
            id="include-input-in-list"
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="Mobile or Name" variant="standard" />
            )}
          />
        </Grid>
      </Grid>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
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