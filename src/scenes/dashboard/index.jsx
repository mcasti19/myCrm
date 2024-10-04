import React from 'react'
import { Box } from "@mui/material";
import { Header } from "../../components";


export const Dashboard = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title='DASHBOARD' subtitle='Wellcome' />
      </Box>
    </Box>
  )
}
