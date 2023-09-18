// import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    // <Box>
    //    <Typography>Home</Typography>
    // </Box>
<>
<h1>Home</h1>
<Link to="/login">Login</Link><br/>
<Link to="/signup">SignUp</Link>
</>
  )
}

export default Home