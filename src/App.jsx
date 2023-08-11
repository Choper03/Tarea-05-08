import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './contents/navbar.jsx';
import Salarial from "./contents/Salarial.jsx"
import Home from "./contents/Home.jsx"

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className='navbar-1'>
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes> {}
            <Route path="/" element={<Home />} /> {}
            <Route path="/salarios" element={<Salarial />} />
          </Routes>
        </main>
        <footer>
          {"By Choper03"}
        </footer>
      </div>
    </Router>
    </div>
  )
}

export default App
