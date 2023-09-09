import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import cartoon from './assets/cartoon.webp';
export default function Home() {
  return (
    <div className="home-container">     
  <div >
          <h1 className="white-heading-hostel"><b>Hostel</b></h1>
          <h1 className="blue-heading"><b>Management</b></h1>
          <h1 className="white-heading"><b>System</b></h1>
          <br />
          <p className="white-heading-para">Our Solution For All Of The Hostel's Needs</p>
          <button type="button" className="btn-login">
          <Link to="/signin">Login</Link>
          </button>
          <p className="or-text-white">or</p>
          <a className="registration" href="#">
          <Link to="/Request">Request Registration</Link>
          </a>
        </div>

        <div className="image">
        <img className="size-image" src={cartoon} alt="image" />

        </div>
        </div>
      
    
  );
}
