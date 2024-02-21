import React from 'react'
import LineChart from './LineChart'

import { Box } from '@mui/material'
import Header from "../../components/Header";


const Line = () => {


  return (
    <Box>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
      <LineChart/>
    </Box>
  )
}

export default Line