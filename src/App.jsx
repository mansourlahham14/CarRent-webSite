import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './Components/Layout'
import Home from './Components/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
