import React from 'react'
import './AdminLogin.css'

export default function AdminLogin() {
  return (
    <div>
       <div className="admin-login-container">
      <h1>Admin Login</h1>
      <form>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-button">Login</button>
      </form>
    </div>
    </div>
  )
}
