import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const Navbar = () => (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/movies">Movies</Link>
    </li>
  </div>
)

export default Navbar
