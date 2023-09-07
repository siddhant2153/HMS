import React from 'react';
import './Request.css'; 

export default function Request() {
  return (
    <div className="box-container">
      <h2>Request Account</h2>
      <form>
        <label htmlFor="cms">Your CMS:</label>
        <input type="text" id="cms" name="cms" required /><br />
        <button type="submit">Request Account</button>
      </form>
      <p>Already have an account? <a href="Login.js">Sign In</a></p>
    </div>
  );
}



