import React from 'react';
import {TableCell,TablePagination} from '@mui/material';

const Pagination = (props) => {

  const handleChangePage = (event, page) => {
    props.onChangePage(event, page)
  };
  const {
    component,
    count,
    rowsPerPage,
    page,
    TablePaginationProps,
  } = props

    return (
      <TablePagination
        {...TablePaginationProps}
        component={component || TableCell}
        count={count}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={page}
        onChangePage={handleChangePage}
      />
    )
}

export default Pagination;
