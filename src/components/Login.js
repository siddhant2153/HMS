import React from 'react';
import { Link } from 'react-router-dom';
import cartoon from './assets/cartoon.webp';

import './Login.css'; 
export default function Login() {
  return (
    <div className="home-container">     
  <div >
          <h1 className="white-heading-hostel">Hostel</h1>
          <h1 className="blue-heading">Management</h1>
          <h1 className="white-heading">System</h1>
          <br />
          <p className="white-heading-para">Our Solution For All Of The Hostel's Needs</p>
          <button type="button" className="btn-login">
          <Link to="/signin">Login</Link>
          </button>
          <p className="or-text-white">or</p>
          <a className="registration" href="#">
            Request Registration
          </a>
        </div>

        <div className="image">
        <img className="size-image" src={cartoon} alt="image" />

        </div>
        </div>
      
    
  );
}
