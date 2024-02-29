import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
import Diary from '../Diary';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/diary" element={<Diary/>} />
    </Routes>
  )
}

export default AllRoutes