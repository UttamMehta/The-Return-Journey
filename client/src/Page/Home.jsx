
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
<>
<h1>Home</h1>
<Link to="/login">Login</Link><br/>
<Link to="/">SignUp</Link>
</>
  )
}

export default Home