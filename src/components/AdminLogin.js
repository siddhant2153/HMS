import React from 'react'
import { Link } from 'react-router-dom';

import './AdminLogin.css'

export default function AdminLogin() {
  return (
    <div>
       <div className="admin-login-container">
      <h1><b>Sign in to Your Account-Manager</b></h1>
      <form>
        <div>
        <label htmlFor='Your Email'>Your Email</label>
          <input type="text" id='Your Email' placeholder="Username" />
        </div>
        <div>
        <label html For='Your Password'>Your Password</label>
          < input type="password" id='Your Password' placeholder="Password" />
        </div>
        <button className="login-button">Login</button>
        <p>Are you Student ? <Link to="/signin">Sign In</Link></p>     
      </form>
    </div>
    </div>
  )
}
