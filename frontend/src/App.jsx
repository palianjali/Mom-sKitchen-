import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
       <Route path='/home' element={<Home />} />
       <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
