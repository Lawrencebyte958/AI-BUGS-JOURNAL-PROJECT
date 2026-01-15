// import { useState } from 'react'
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>

    </Router>
  )
}

export default App
