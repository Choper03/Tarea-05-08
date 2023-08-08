import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './contents/navbar.jsx';
import Salarial from "./contents/Salarial.jsx"
import Home from "./contents/Home.jsx"

function App() {

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes> {/* Usamos "Routes" en lugar de "Switch" */}
            <Route path="/" element={<Home />} /> {/* Usamos "element" en lugar de "component" */}
            <Route path="/salarios" element={<Salarial />} />
          </Routes>
        </main>
        <footer>
          {"By Choper03"}
        </footer>
      </div>
    </Router>
  )
}

export default App
