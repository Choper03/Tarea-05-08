import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/salarios">Salarios</Link>
        </div>
    </nav>
  );
}

export default Navbar;