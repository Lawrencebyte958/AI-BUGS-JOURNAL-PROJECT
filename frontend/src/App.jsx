// import { useState } from 'react'
import Navbar from './components/Navbar'; 
import NewEntry from './pages/NewEntry';
import WeeklySummary from "./pages/WeeklySummary";
import EditEntry from './pages/EditEntry';
import Home from './pages/Home'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/new" element={<NewEntry />}/>

          <Route path='/edit/:id' element={<EditEntry />}></Route>

          <Route path="/summary" element={<WeeklySummary/>}/>
        </Routes>
      </main>
      </div>
    </Router>
  )
}

export default App
