import React from "react";
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

  return (
    <Box sx={{ borderRadius: '8px', margin:5, border:'2px solid',justifyContent:'center', }}>
      <ResponsiveTable
        columns={columns}
        data={data}
        showPagination= {true}
        count={data.length}
      />
    </Box>
  );
};

export default Sandbox;