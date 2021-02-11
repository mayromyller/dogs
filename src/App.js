import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import User from './components/User'
import PhotoViewer from './components/PhotoViewer'
import Profile from './components/User/Profile'

import { UserStorage } from './contexts/userContext'

import ProtectedRoute from './helpers/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="account/*" element={<User />} />
            <Route path="photo/:id" element={<PhotoViewer />} />
            <Route path="perfil/:user" element={<Profile />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
