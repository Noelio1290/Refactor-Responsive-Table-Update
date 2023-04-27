import React, { useState,useEffect } from 'react';
import { Box } from '@mui/material';
import DataList from './DataList';
import DataTable from './DataTable';

/**
 * Responsive read-only table (desktop devices) <-> read-only expandable list (tablet/mobile devices) for "@mui/material": "5.10.14",
 */
const ResponsiveTable = (props) => {

  const {
    columns,
    data,
    rowsPerPage,
  } = props;

  const [currentPage,setCurrentPage] = useState(0);
  const [tableVisibleData,setTableVisibleData] = useState([]);

  const changePage = (event,page) => {  
    setTableVisibleData(data.slice(( page ) * rowsPerPage,rowsPerPage * (page + 1)));
    setCurrentPage(page);
  };
  
  useEffect(()=>{
    setTableVisibleData(data.slice(0,rowsPerPage))
  },[]);

  return (
    <Box>
      {/* DESKTOP BIG TABLE */}
      <Box 
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex',
          },
        }}
      >
        <DataTable
          columns={columns}
          count={data.length}
          data={tableVisibleData}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          showPagination
          onChangePage={changePage}
        />
      </Box>
      {/* MOBILE EXPANDABLE LIST OF CARDS */}
      <Box 
        sx={{
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none',
          },     
        }}
      >
        <DataList
          columns={columns}
          count={data.length}
          data={tableVisibleData}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          showPagination
          onChangePage={changePage}
        />
      </Box>
    </Box>
  );
};

export default ResponsiveTable;