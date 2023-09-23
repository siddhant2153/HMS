import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cartoon from './assets/cartoon.webp';

import './Login.css'; 

export default function Login() {
  const [isRegistrationRequested, setIsRegistrationRequested] = useState(false);

  const handleRequestRegistration = () => {
    setIsRegistrationRequested(true);

  };

  return (
    <div className="home-container">     
      <div>
        <h1 className="white-heading-hostel">Hostel</h1>
        <h1 className="blue-heading">Management</h1>
        <h1 className="white-heading">System</h1>
        <br />
        <p className="white-heading-para">Our Solution For All Of The Hostel's Needs</p>
        <button type="button" className="btn-login">
          <Link to="/signin">Login</Link>
        </button>
        <p className="or-text-white">or</p>
        {/* Toggle registration request state when clicked */}
        <button type="button" className="registration" onClick={handleRequestRegistration}>
          {isRegistrationRequested ? 'Registration Requested' : 'Request Registration'}
        </button>
      </div>

      <div className="image">
        <img className="size-image" src={cartoon} alt="image" />
      </div>
    </div>
  );
}
