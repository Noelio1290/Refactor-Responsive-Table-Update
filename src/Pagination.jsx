import React from 'react';
import { TablePagination } from '@mui/material';

const Pagination = (props) => {
  
  const {
    component,
    count,
    rowsPerPage,
    page,
    onChangePage,
  } = props

  const handleChangePage = (event, page) => onChangePage(event, page)

    return (
      <TablePagination
        component={component}
        count={count}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={page}
        onPageChange={handleChangePage}
      />
    )
}

export default Pagination;
