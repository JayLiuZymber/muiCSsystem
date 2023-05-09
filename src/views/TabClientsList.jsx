import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';

const columns = [
  { field: 'mobile', headerName: 'Mobile', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    editable: true,
  },
  {
    field: 'region2',
    headerName: 'Region2',
    type: 'number',
    width: 110,
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

export default function TabClientsList() {
  const count = 79;
  return (
    <Box sx={{ height: 400, width: '70vw' }}>
      Clients List ({count})
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}