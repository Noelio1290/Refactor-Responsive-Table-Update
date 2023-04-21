import React, { useState,useEffect } from 'react';
import { Hidden, } from '@mui/material';
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
      classes,
      columns,
      data,
      rowsClassArray,
      excludePrimaryFromDetails,
      noContentText,
      tableBreakpoints,
      listBreakpoints,
      showPagination,
      implementation,
      ExpansionPanelDetailsProps,
      ExpansionPanelDetailsTypographyProps,
      ExpansionPanelMoreIconProps,
      ExpansionPanelProps,
      ExpansionPanelSummaryProps,
      ExpansionPanelSummaryTypographyProps,
      TableBodyCellProps,
      TableBodyProps,
      TableBodyRowProps,
      TableHeadCellProps,
      TableHeadProps,
      TableHeadRowProps,
      TablePaginationProps,
      TableProps,
      enableShouldComponentUpdate,
    } = props;

  const [currentPage,setcurrentPage] = useState(0)
  const [rowsPerPage,setRowsPerPage] = useState(5)
  const [tableVisibleContacts,setTableVisibleContacts] = useState([])

  const changePage = (event,page) => {
    console.log(tableVisibleContacts)
    let currentPage = (page - 1) * rowsPerPage
    let currentPerPage = rowsPerPage * page
    console.log(currentPage)
    console.log(currentPerPage)

    setTableVisibleContacts(data.slice(( page ) * rowsPerPage,rowsPerPage * (page + 1)))
    
    setcurrentPage(page)
  }

  useEffect(()=>{
    setTableVisibleContacts(data.slice(currentPage,rowsPerPage))
  },[])


    return (
      <div className={classes.root}>
        {/* DESKTOP BIG TABLE */}

        <Hidden only={tableBreakpoints || [ 'xs','sm' ]} implementation={implementation || 'js'}>
          <DataTable
            enableShouldComponentUpdate={enableShouldComponentUpdate}
            columns={columns}
            count={data.length}
            data={tableVisibleContacts}
            rowsClassArray={rowsClassArray}
            noContentText={noContentText}
            page={currentPage}
            rowsPerPage={rowsPerPage}
            showPagination={showPagination}
            TableBodyCellProps={TableBodyCellProps}
            TableBodyProps={TableBodyProps}
            TableBodyRowProps={TableBodyRowProps}
            TableHeadCellProps={TableHeadCellProps}
            TableHeadProps={TableHeadProps}
            TableHeadRowProps={TableHeadRowProps}
            TablePaginationProps={TablePaginationProps}
            TableProps={TableProps}
            onChangePage={changePage}
          />
        </Hidden>

        {/* MOBILE EXPANDABLE LIST OF CARDS */}

        <Hidden only={listBreakpoints || [ 'md','lg','xl' ]} implementation={implementation || 'js'}>
          <DataList
            enableShouldComponentUpdate={enableShouldComponentUpdate}
            columns={columns}
            count={data.length}
            data={tableVisibleContacts}
            rowsClassArray={rowsClassArray}
            excludePrimaryFromDetails={excludePrimaryFromDetails}
            noContentText={noContentText}
            page={currentPage}
            rowsPerPage={rowsPerPage}
            showPagination={showPagination}
            ExpansionPanelDetailsProps={ExpansionPanelDetailsProps}
            ExpansionPanelDetailsTypographyProps={
              ExpansionPanelDetailsTypographyProps
            }
            ExpansionPanelMoreIconProps={ExpansionPanelMoreIconProps}
            ExpansionPanelProps={ExpansionPanelProps}
            ExpansionPanelSummaryProps={ExpansionPanelSummaryProps}
            ExpansionPanelSummaryTypographyProps={
              ExpansionPanelSummaryTypographyProps
            }
            TablePaginationProps={TablePaginationProps}
            onChangePage={changePage}
          />
        </Hidden>
      </div>
    )
}

export default withStyles(styles)(ResponsiveTable);
