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
    rowsPerPage
  } = props;

  const [currentPage,setcurrentPage] = useState(0);
  const [tableVisibleContacts,setTableVisibleContacts] = useState([]);

  const changePage = (event,page) => {  
    setTableVisibleContacts(data.slice(( page ) * rowsPerPage,rowsPerPage * (page + 1)));
    setcurrentPage(page);
  };

  useEffect(()=>{
    setTableVisibleContacts(data.slice(currentPage,rowsPerPage))
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
          data={tableVisibleContacts}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          showPagination={true}
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
          data={tableVisibleContacts}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          showPagination={true}
          onChangePage={changePage}
        />
      </Box>
    </Box>
  );
};

export default ResponsiveTable;