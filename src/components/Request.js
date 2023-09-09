import React from 'react';
import { Link } from 'react-router-dom';
import './Request.css'; 

export default function Request() {
  
  return (
   
       
    <div className="box-container">
     
      <h2><b>Request Account From Hostel Manager</b></h2>
      
      <form>
        <label htmlFor="cms">Your CMS:</label>
        <input type="text" placeholder='000' id="cms" name="cms" required /><br />
        <button type="submit">Request Account</button>
      </form>
      <p>Already Have Account? <Link to="/signin">Sign In</Link></p>    </div>
    
  );
}
