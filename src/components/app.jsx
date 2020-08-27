import React from 'react'
import Router from './router'
import Navbar from './navbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </>
)
export default App
