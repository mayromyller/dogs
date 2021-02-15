import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import User from './components/User/User'
import PhotoViewer from './components/PhotoViewer/PhotoViewer'
import Profile from './components/User/Profile/Profile'
import NotFound from './components/NotFound/NotFound'

import { UserStorage } from './contexts/userContext'

import ProtectedRoute from './helpers/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="main-app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="account/*" element={<User />} />
              <Route path="photo/:id" element={<PhotoViewer />} />
              <Route path="perfil/:user" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
