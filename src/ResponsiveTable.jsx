import React, { useState,useEffect } from 'react';
import { Box, Hidden, } from '@mui/material';
import {withStyles} from '@mui/styles';
import DataList from './DataList';
import DataTable from './DataTable';

const styles = {
  root: {},
}

/**
 * Responsive read-only table (desktop devices) <-> read-only expandable list (tablet/mobile devices) for material-ui 1.0-beta.
 */
const ResponsiveTable = (props) => {

  const {
    columns,
    data,
    tableBreakpoints,
    listBreakpoints,
    implementation,
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
      <Hidden only={tableBreakpoints || [ 'xs','sm' ]} implementation={implementation || 'js'}>
        <DataTable
          columns={columns}
          count={data.length}
          data={tableVisibleContacts}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          showPagination={true}
          onChangePage={changePage}
        />
      </Hidden>
      {/* MOBILE EXPANDABLE LIST OF CARDS */}
      <Hidden only={listBreakpoints || [ 'md','lg','xl' ]} implementation={implementation || 'js'}>
        <DataList
          columns={columns}
          count={data.length}
          data={tableVisibleContacts}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          showPagination={true}
          onChangePage={changePage}
        />
      </Hidden>
    </Box>
  );
};

export default withStyles(styles)(ResponsiveTable);
