import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AdminLogin.css'

export default function AdminLogin() {
  const [email, setEmail] = useState(''); // Initialize email state
  const [password, setPassword] = useState(''); // Initialize password state

  return (
    <div>
      <div className="admin-login-container">
        <h1><b>Sign in to Your Account-Manager</b></h1>
        <form>
          <div>
            <label htmlFor='Your Email'>Your Email</label>
            <input
              type="text"
              id='Your Email'
              placeholder="Username"
              value={email} // Use email state for value
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>
          <div>
            <label htmlFor='Your Password'>Your Password</label>
            <input
              type="password"
              id='Your Password'
              placeholder="Password"
              value={password} // Use password state for value
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <button className="login-button">Login</button>
          <p>Are you a student? <Link to="/signin">Sign In</Link></p>
        </form>
      </div>
    </div>
  )
}
