import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default AllRoutes