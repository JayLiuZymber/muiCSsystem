import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid,
  // GridToolbar,
  GridToolbarQuickFilter,
  GridLogicOperator } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// icon
import SearchIcon from '@mui/icons-material/Search';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';

import CustomNoRowsOverlay from 'components/CustomDateGrid';

const VISIBLE_FIELDS = ['mobile', 'name', 'type', 'region2'];
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
    // align: 'center',
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

// todo mobile: <Link to='/client' >xxx</Link>
// todo name: [<ChatBubbleIcon /> ,'xxx']
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
    options: rows,
    getOptionLabel: (option) => [option.name, option.mobile]
  };
  // const flatProps = {
  //   options: rows.map((option) => option.mobile),
  // };
  // const [value, setValue] = React.useState(null);

  // console.log('VISIBLE_FIELDS', VISIBLE_FIELDS);
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    // rowLength: 100,
  });

  const filterColumns = React.useMemo(
    () =>
      data.columns
        .filter((column) => VISIBLE_FIELDS.includes(column.field))
        .map((column) => {
          if (column.field === 'name') {
            return {
              ...column,
              // getApplyQuickFilterFn: column.value,
            };
          }
          if (column.field === 'region2' || 
              column.field === 'type' ) {
            return {
              ...column,
              getApplyQuickFilterFn: undefined,
            };
          }
          return column;
        }),
    [data.columns],
  );

  return (
    <Box sx={{ width: '70vw', color:'#5D737E', 
      // bgcolor: '#fff',
      }}>
      <Grid container rowSpacing={1}>
        <Grid display="flex" xs={6} sm={6}>
          <h3>Clients List ({rows.length})</h3>
        </Grid>
        <Grid display="flex" xs={6} sm={6}>
          <Autocomplete
            {...defaultProps}
            sx={{
              minWidth: 200, }}
            id="include-input-in-list"
            freeSolo
            includeInputInList
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.name} <br />
                ({option.mobile})
              </Box>
            )}
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
              >
                <GridToolbarQuickFilter
                  quickFilterParser={(searchInput) =>
                    searchInput
                      .split(',')
                      .map((value) => value.trim())
                      .filter((value) => value !== '')
                  }
                />
                </TextField>
                
            )}
          />
          <SearchIcon sx={{my:2}}/>
        </Grid>
      </Grid>
      <div style={{ height: 400, width: '100%' }}>
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
          filter: {
            ...data.initialState?.filter,
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLogicOperator.Or,
            },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        // checkboxSelection
        disableRowSelectionOnClick
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
        }}
      />
      </div>
    </Box>
  );
}