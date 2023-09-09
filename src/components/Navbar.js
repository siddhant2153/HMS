 import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
         <nav className="navbar" style={{ backgroundColor: '#141E46' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-mortarboard" style={{ color: '#F3FDE8' }}></i>
            <strong style={{ color: '#F3FDE8' }}> HMS</strong>
          </Link>

          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#141E46' }}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" aria-current="page" to="/about" style={{ color: '#F3FDE8', marginRight: '10px' }}>About</Link>
                  <Link className="nav-link" to="/contact" style={{ color: '#F3FDE8', marginRight: '10px' }}>Contact</Link>
                  <Link className="nav-link" to="/request" style={{ color: '#F3FDE8', marginRight: '10px' }}>Request</Link>
                  <Link className="nav-link" to="/adminlogin" style={{ color: '#F3FDE8', marginRight: '10px' }}>Admin Login</Link>
                  <Link className="nav-link" to="/signin" style={{ color: '#F3FDE8', marginRight: '10px' }}>signin</Link>

                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  )
}
