import React from 'react';
import './Login.css';

export default function LOGIN() {
  return (
    <div style={{ backgroundColor: '#141E46' }}>
      <nav className="navbar" style={{ backgroundColor: '#141E46' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-mortarboard" style={{ color: '#F3FDE8' }}></i>
            <strong style={{ color: '#F3FDE8' }}> HMS</strong>
          </a>

          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#141E46' }}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="#" style={{ color: '#F3FDE8', marginRight: '10px' }}>About</a>
                  <a className="nav-link" href="#" style={{ color: '#F3FDE8', marginRight: '10px' }}>Contact</a>
                  <a className="nav-link" href="#" style={{ color: '#F3FDE8', marginRight: '10px' }}>Request</a>
                  <a className="nav-link" href="#" style={{ color: '#F3FDE8', marginRight: '10px' }}>Admin Login</a>
                  <button type="button" className="btn btn-primary" style={{ marginRight: '10px' }}>Login</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>

      <div className="text">
        <h1 className="white-heading-hostel"> Hostel</h1> <h1 className="blue-heading">Management </h1> <h1 className="white-heading">System</h1><br/>
        <p className="white-heading-para">
          Our Solution For All Of The Hostel's Needs
        </p>
        <button type="button" className="btn-login">Login</button>
        <p className="or-text-white">
          or
        </p>
        <a className="registration" href="#">Request Registration</a>
      </div>

      <div className="image">
        <img className="size-image" src="assest/image/cartoon-1.webp" alt="" />
    </div>
      </div>
  );
}
