import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { columns, rows } from './data';
import Header from '../../components/Header';

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: '98%', mx: "auto" }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid 

        slots={{
          toolbar: GridToolbar,
        }}
        
      rows={rows}

        // @ts-ignore
        columns={columns} />
    </Box>
  )
}

export default Contacts