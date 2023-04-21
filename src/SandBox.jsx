import React, { useEffect, useState } from "react";
import ResponsiveTable from './ResponsiveTable';
import { Box } from "@mui/material";

const Sandbox = ({ 
  data = [
    {
      id: '1',
      name: 'Foo',
      authors: ['Andy'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '420',
      name: 'Noel',
      authors: ['El Don', 'Master'],
    },
    {
      id: '2',
      name: 'Foo',
      authors: ['Andy'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '420',
      name: 'Noel',
      authors: ['El Don', 'Master'],
    },
    
    {
      id: '3',
      name: 'Foo',
      authors: ['Andy'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '420',
      name: 'Noel',
      authors: ['El Don', 'Master'],
    },
    {
      id: '4',
      name: 'Foo',
      authors: ['Andy'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    },
    {
      id: '420',
      name: 'Noel',
      authors: ['El Don', 'Master'],
    },
  ]
}) => {
  const [currentPage,setcurrentPage] = useState(0)
  const [rowsPerPage,setRowsPerPage] = useState(6)
  const [tableVisibleContacts,setTableVisibleContacts] = useState([])

  const columns = [
    {
      key: 'id',
      label: 'ID',
      primary: true,
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'authors',
      label: 'Author(s)',
      render: (value) => value.join(', ')
    },
  ]

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
    <Box sx={{ borderRadius: '8px', margin:5, border:'2px solid',justifyContent:'center', }}>
      <ResponsiveTable
        columns={columns}
        data={tableVisibleContacts}
        showPagination= {true}
        page={currentPage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        count={data.length}
        onChangePage={changePage}
      />
    </Box>
  );
};

export default Sandbox;