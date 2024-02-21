import React from 'react'

import { Box, useTheme } from '@mui/material'
import Header from "../../components/Header";

import Geo from './Geo'





const Geography = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
};


export default Geography