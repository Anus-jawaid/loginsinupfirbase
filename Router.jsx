import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'


function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}  />
            <Route path='/signup' element={<Signup />}  />
            <Route path='/profile' element={<Profile />}  />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router