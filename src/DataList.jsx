import React from 'react';
import { Box, Grid } from '@mui/material';
import { CellRenderer, LabelRenderer } from './Renderer';
import ExpandableListItem from './ExpandableListItem';
import Pagination from './Pagination';

/**
 * List with expandable items - mobile table analogue
 */
const DataList = (props) => {

  const handleChangePage = (event, page) => props.onChangePage(event, page)

  const getRowClass = (index) => {
    const {rowsClassArray} = props;
    return rowsClassArray && rowsClassArray[index] ? rowsClassArray[index] : '';
  };

  const createListItemTitle = (columns, row, data) => {
    const primaryColumns = columns.filter(column => column.primary)
    return primaryColumns.length === 0
      ? <CellRenderer column={columns[0]} row={row} data={data} />
      : primaryColumns
        .map(column => (
          <CellRenderer key={column.key} column={column} row={row} data={data} />
        ))
        .reduce((prev, next) => [prev, ' ', next]) // divide item headers by space
  }

  const createListItemDescription = (columns, row, data, excludePrimary) => (
    <Box >
      {columns
        .filter(column => !excludePrimary || !column.primary)
        .map((column, index) => (
          <Grid 
            key={`${column.label}-${index}`} 
            container
            sx={{ flexDirection:'row',marginBottom:1}}

          >
            <Box 
              sx={{ 
                width:'100px',
                marginRight:1,
                
              }}
            >
              <Grid item xs
                sx={{ 
                  color:'black',
                  fontFamily: "Helvetica" ,
                  fontSize:15,
                  width:'100px',
                  }} 
              >
                <LabelRenderer 
                  column={column} 
                  data={data} 
                  />
              </Grid>
            </Box>
            <Box 
              sx={{ 
                width:'150px',
              }}
            >
              <Grid item xs 
                sx={{ 
                  color:'grey',
                  fontSize:14,
                }} 
                >
                <CellRenderer column={column} row={row} data={data} />
              </Grid>
            </Box>
          </Grid>
      ))}
    </Box>
  )

    const {
      columns,
      count,
      data,
      excludePrimaryFromDetails,
      page,
      rowsPerPage,
      showPagination
    } = props

    if (!Array.isArray(data)
      || data.length === 0
      || !Array.isArray(columns)
      || columns.length === 0) {
      return <></>
    };

    return (
      <Box sx={{ width:'100%'}}>
        {data.map((row, index) => (
          <ExpandableListItem
            key={index}
            panelClass={getRowClass(index)}
            summary={createListItemTitle(columns, row, data)}
            details={createListItemDescription(columns, row, data, excludePrimaryFromDetails)}
          />
        ))}
        {
          showPagination &&
          <Pagination
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
          />
        }
      </Box>
    )
}

export default DataList;