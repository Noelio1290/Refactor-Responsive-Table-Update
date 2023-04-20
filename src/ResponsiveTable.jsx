import React from 'react';
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

  const handleChangePage = (event, page) => {
    props.onChangePage(event, page);
  };

    const {
      classes,
      columns,
      count,
      data,
      rowsClassArray,
      excludePrimaryFromDetails,
      noContentText,
      tableBreakpoints,
      listBreakpoints,
      page,
      rowsPerPage,
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

    return (
      <div className={classes.root}>
        {/* DESKTOP BIG TABLE */}

        <Hidden only={tableBreakpoints || [ 'xs','sm' ]} implementation={implementation || 'js'}>
          <DataTable
            enableShouldComponentUpdate={enableShouldComponentUpdate}
            columns={columns}
            count={count}
            data={data}
            rowsClassArray={rowsClassArray}
            noContentText={noContentText}
            page={page}
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
            onChangePage={handleChangePage}
          />
        </Hidden>

        {/* MOBILE EXPANDABLE LIST OF CARDS */}

        <Hidden only={listBreakpoints || [ 'md','lg','xl' ]} implementation={implementation || 'js'}>
          <DataList
            enableShouldComponentUpdate={enableShouldComponentUpdate}
            columns={columns}
            count={count}
            data={data}
            rowsClassArray={rowsClassArray}
            excludePrimaryFromDetails={excludePrimaryFromDetails}
            noContentText={noContentText}
            page={page}
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
            onChangePage={handleChangePage}
          />
        </Hidden>
      </div>
    )
}

export default withStyles(styles)(ResponsiveTable);
