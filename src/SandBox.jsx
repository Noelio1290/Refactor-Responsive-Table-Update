import React from "react";
import ResponsiveTable from './ResponsiveTable';
import { Box } from "@mui/material";
import mockClients from "./clients";

const Sandbox = () => {

  const columns = [
    {
      key: 'name',
      label: 'Nombre',
      primary: true,
    },
    {
      key: 'lastname',
      label: 'apellido',
      primary: true,
    },
    {
      key: 'phone',
      label: 'Telefono',
    },
    {
      key: 'email',
      label: 'Correo',
    },
    {
      key: 'address',
      label: 'Direccion',
    },
    {
      key: 'edit',
      label: '',
    },
    {
      key: 'delete',
      label: '',
    }
  ]

  return (
    <Box sx={{ borderRadius: '8px', margin:1, border:'2px solid',justifyContent:'center',minWidth:'300px' }}>
      <ResponsiveTable
        columns={columns}
        data={mockClients}
        rowsPerPage={15}
      />
    </Box>
  );
};

export default Sandbox;