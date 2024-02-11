
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import{ Contact } from './pages/Contact'
import { Places} from './pages/Places'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
