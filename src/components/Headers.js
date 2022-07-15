import { Box,AppBar,Toolbar,Typography } from '@mui/material'
import React from 'react'

function Headers() {
  return (
    <Box>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" align='left' component="div" sx={{ flexGrow: 1 }}>
                pinaki's Resturant
              </Typography>
              
            </Toolbar>
          </AppBar>
    </Box>
  )
}

export default Headers