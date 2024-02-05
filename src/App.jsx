import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import{ Contact } from './pages/Contact'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
