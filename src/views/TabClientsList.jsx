import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid,
  GridToolbar,
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
import LinearProgress from '@mui/material/LinearProgress';
// icon
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
// router
import { Link, useNavigate, useLocation } from "react-router-dom";

import GridNoRows from 'components/GridNoRows';

// -----------------------------------------------------------------------------
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
    renderCell: cellMobile,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    // editable: true,
    headerAlign: 'center',
    // align: 'center',
    renderCell: cellName,
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

function cellMobile(params) {
  return (
    <>
      <Link to='/client' >
        {params.value}
      </Link>
    </>
  );
}

function cellName(params) {
  return (
    <>
    {/* <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}> */}
      <ChatBubbleIcon />{params.value}
    {/* </div> */}
    </>
  );
}

const rows = [
  { id: 1, mobile: '12111111', name: 'Snow', type: 'Type1', region2: '-' },
  { id: 2, mobile: '2333333', name: 'Lannister', type: '-', region2: '-' },
  { id: 3, mobile: '34358888', name: 'Lannister', type: '-', region2: '-' },
  { id: 4, mobile: '43222222', name: 'Stark', type: '-', region2: '-' },
  { id: 5, mobile: '56000025', name: 'Targaryen', type: '-', region2: '-' },
  { id: 6, mobile: '6805255', name: '-', type: '-', region2: '-' },
  { id: 7, mobile: '725828', name: 'Clifford', type: '-', region2: '-' },
  { id: 8, mobile: '89888222', name: 'Frances', type: '-', region2: '-' },
  { id: 9, mobile: '90018888', name: 'Roxie', type: '-', region2: '-' },
  { id: 10, mobile: '10118508', name: 'A', type: '-', region2: '-' },
  { id: 11, mobile: '11010005', name: 'B', type: '-', region2: '-' },
  { id: 13, mobile: '13010505', name: 'C', type: '-', region2: '-' },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 45,
  flexGrow: 1,
}));

export default function TabClientsList() {
  // router
  const { state } = useLocation();
  // console.log('state', state);
  const navigate = useNavigate();

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
      // bgcolor: '#0f0',
      }}>
      <Grid container rowSpacing={1} >
        <Grid display="flex" xs={6} sm={6}>
          <h3>Clients List ({rows.length})</h3>
        </Grid>
        <Grid xs={6} sm={6}>
          <Box display="flex" justifyContent="flex-end">
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
          </Box>
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
        slots={{
          noRowsOverlay: GridNoRows,
          loadingOverlay: LinearProgress,          
          // toolbar: GridToolbar,
          toolbar: GridToolbarQuickFilter,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        // disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        // checkboxSelection
        disableRowSelectionOnClick
      />
      </div>
    </Box>
  );
}