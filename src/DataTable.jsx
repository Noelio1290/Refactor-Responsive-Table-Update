import React from 'react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material'
import { CellRenderer, LabelRenderer } from './Renderer'
import Pagination from './Pagination'
/**
 * Simple read only table with header and body
 */

const DataTable = (props) => {
  
  const {
    columns,
    count,
    data,
    page,
    rowsPerPage,
    showPagination,
    onChangePage,
  } = props;

    return (
      <Table sx={{ minWidth:'100%'}} >
        <TableHead >
          <TableRow >
            {columns.map((column, index) => (
              <TableCell
                key={`${column.label}-${index}`}
                align='center'
              >
                <LabelRenderer column={column} data={data} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} >
              {columns.map((column, columnIndex) => (
                <TableCell
                  key={`${rowIndex}-${columnIndex}`}
                  align='center'
                >
                  <CellRenderer column={column} row={row} data={data} sx={{width:'100%'}} />
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
                onChangePage={onChangePage}
              />
            </TableRow>
          </TableFooter>
        }
      </Table>
    )
  
}

export default DataTable;
