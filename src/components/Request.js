import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Request.css'; 

export default function Request() {
  const [cms, setCms] = useState(''); // Initialize CMS state

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the CMS value (e.g., send a request to the server)
    console.log('CMS:', cms);
  };

  return (
    <div className="box-container">
      <h2><b>Request Account From Hostel Manager</b></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cms">Your CMS:</label>
        <input
          type="text"
          placeholder='000'
          id="cms"
          name="cms"
          value={cms} // Use CMS state for value
          onChange={(e) => setCms(e.target.value)} // Update CMS state
          required
        /><br />
        <button type="submit">Request Account</button>
      </form>
      <p>Already Have an Account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
}
