import React from "react";
import ResponsiveTable from './ResponsiveTable';

const Sandbox = () => {

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
  
  const data = [
    {
      id: '1234',
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
    }
  ]

  return (
      <ResponsiveTable
        columns={columns}
        data={data}
      />
  );
};

export default Sandbox;