import React from 'react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material'
import { CellRenderer, LabelRenderer } from './Renderer'
import NoContent from './NoContent'
import Pagination from './Pagination'
/**
 * Simple read only table with header and body
 */

const DataTable = (props) => {

  const handleChangePage = (event, page) => {
    props.onChangePage(event, page);
  };

  const getRowClass = (index) => {
    const {rowsClassArray} = props;
    return rowsClassArray && rowsClassArray[index] ? rowsClassArray[index] : '';
  };

    const {
      columns,
      count,
      data,
      noContentText,
      page,
      rowsPerPage,
      showPagination,
      TableBodyCellProps,
      TableBodyProps,
      TableBodyRowProps,
      TableHeadCellProps,
      TableHeadProps,
      TableHeadRowProps,
      TablePaginationProps,
      TableProps,
    } = props;

    if (
      !Array.isArray(data) ||
      data.length === 0 ||
      !Array.isArray(columns) ||
      columns.length === 0
    ) {
      return <NoContent text={noContentText} />
    };

    return (
      <Table {...TableProps}>
        <TableHead {...TableHeadProps}>
          <TableRow {...TableHeadRowProps}>
            {columns.map((column, index) => (
              <TableCell
                key={`${column.label}-${index}`}
                {...TableHeadCellProps}
              >
                <LabelRenderer column={column} data={data} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody {...TableBodyProps}>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className={getRowClass(rowIndex)} {...TableBodyRowProps}>
              {columns.map((column, columnIndex) => (
                <TableCell
                  key={`${rowIndex}-${columnIndex}`}
                  {...TableBodyCellProps}
                >
                  <CellRenderer column={column} row={row} data={data} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {
          showPagination &&
          <TableFooter>
            <TableRow>
              <Pagination
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                TablePaginationProps={TablePaginationProps}
                onChangePage={handleChangePage}
              />
            </TableRow>
          </TableFooter>
        }
      </Table>
    )
  
}

export default DataTable;
