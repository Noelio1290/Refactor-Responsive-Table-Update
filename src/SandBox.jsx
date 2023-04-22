import React from "react";
import ResponsiveTable from './ResponsiveTable';
import { Box } from "@mui/material";

const Sandbox = ({ 
  data = [
    {
      _id: '63991ffbe50b9b7d2669a3d8',
      name: 'Doris',
      lastname: 'Golden',
      phone: '+52 (916) 580-2847',
      email: 'dorisgolden@zilphur.com',
      address: '935 Oriental Boulevard, Marbury, Mississippi, 8513',
    },
    {
      _id: '63991ffb752dd8b31c2678ba',
      name: 'Alfreda',
      lastname: 'Parks',
      phone: '+52 (958) 556-2141',
      email: 'alfredaparks@zilphur.com',
      address: '632 Prospect Place, Hayden, Indiana, 1338',
    },
    {
      _id: '63991ffb11edb86ad96557b6',
      name: 'Chasity',
      lastname: 'Stephens',
      phone: '+52 (801) 504-3945',
      email: 'chasitystephens@zilphur.com',
      address: '469 Gold Street, Brecon, Michigan, 879',
    },
    {
      _id: '63991ffb3bc63c91b8def954',
      name: 'Cathryn',
      lastname: 'Klein',
      phone: '+52 (975) 554-3864',
      email: 'cathrynklein@zilphur.com',
      address: '523 Grand Avenue, Sunbury, American Samoa, 8229',
    },
    {
      _id: '63991ffb4125be62a869ddfb',
      name: 'Russell',
      lastname: 'Winters',
      phone: '+52 (930) 569-3441',
      email: 'russellwinters@zilphur.com',
      address: '138 Highlawn Avenue, Brownsville, Arizona, 7156',
    },
    {
      _id: '63991ffb36ff4feae1604103',
      name: 'French',
      lastname: 'Rich',
      phone: '+52 (881) 590-2050',
      email: 'frenchrich@zilphur.com',
      address: '416 Dikeman Street, Carrizo, District Of Columbia, 2491',
    },
    {
      _id: '63991ffbf01b6d425b8b0c8c',
      name: 'Mathis',
      lastname: 'Crane',
      phone: '+52 (844) 557-2483',
      email: 'mathiscrane@zilphur.com',
      address: '188 Ford Street, Waumandee, Wisconsin, 5250',
    },
    {
      _id: '63991ffb25eb06b827418cf8',
      name: 'Cristina',
      lastname: 'Horton',
      phone: '+52 (860) 585-3432',
      email: 'cristinahorton@zilphur.com',
      address: '191 Quentin Street, Dante, Ohio, 8982',
    },
    {
      _id: '63991ffb3b65a7308b649133',
      name: 'Allyson',
      lastname: 'Carr',
      phone: '+52 (940) 477-2460',
      email: 'allysoncarr@zilphur.com',
      address: '607 Clay Street, Gwynn, Federated States Of Micronesia, 2538',
    },
    {
      _id: '63991ffbde7ee6aa06f62d0e',
      name: 'Allison',
      lastname: 'Strong',
      phone: '+52 (984) 496-3453',
      email: 'allisonstrong@zilphur.com',
      address: '643 Lincoln Avenue, Shindler, Arkansas, 8470',
    },
    {
      _id: '63991ffb5476fcc09654e5da',
      name: 'Daphne',
      lastname: 'Collins',
      phone: '+52 (905) 555-3301',
      email: 'daphnecollins@zilphur.com',
      address: '672 Clymer Street, Bladensburg, Hawaii, 2938',
    },
    {
      _id: '63991ffbaf972cdef2949062',
      name: 'Daugherty',
      lastname: 'Tyson',
      phone: '+52 (909) 479-2136',
      email: 'daughertytyson@zilphur.com',
      address: '288 Lott Place, Bloomington, Colorado, 2330',
    },
    {
      _id: '63991ffbd0fc230f99749ce6',
      name: 'Reynolds',
      lastname: 'Suarez',
      phone: '+52 (989) 574-2638',
      email: 'reynoldssuarez@zilphur.com',
      address: '612 Dare Court, Deseret, New York, 8647',
    },
    {
      _id: '63991ffb43f5f5f71f829a99',
      name: 'Shelley',
      lastname: 'Trevino',
      phone: '+52 (942) 583-3096',
      email: 'shelleytrevino@zilphur.com',
      address: '484 Emerald Street, Saranap, New Mexico, 5101',
    },
    {
      _id: '63991ffb7e9dbb920805e579',
      name: 'Ellis',
      lastname: 'Hooper',
      phone: '+52 (809) 494-3783',
      email: 'ellishooper@zilphur.com',
      address: '611 Bokee Court, Corriganville, South Carolina, 8818',
    }
  ]
}) => {

  const columns = [
    {
      key: 'name',
      label: 'Nombre',
      primary: true,
    },
    {
      key: 'lastname',
      label: 'apellido',
    },
    {
      key: 'phone',
      label: 'Telefono',
      primary: true,
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
      label: 'Editar',
    },
    {
      key: 'delete',
      label: 'Eliminar',
    }
  ]

  return (
    <Box sx={{ borderRadius: '8px', margin:2, border:'2px solid',justifyContent:'center', }}>
      <ResponsiveTable
        columns={columns}
        data={data}
      />
    </Box>
  );
};

export default Sandbox;