
import React from 'react';
import { Link } from 'react-router-dom';

import './signin.css';

class signin extends React.Component {
  render() {
    return (
      <div >
      
        <div className="intro-text">
          <h1 className="white-heading-hostel1"><b>Hostel</b></h1>
          <h1 className="blue-heading1"><b>Management</b></h1>
          <h1 className="black-heading1"><b>System</b></h1><br />
          <p className="white-heading-para1">Our Solution For All Of The Hostel's Needs</p>
        </div>

        <div className="box-container1">
          <h2><b>Sign In to Your Account</b></h2>
          <container1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder='Enter your Email here' id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder='Enter your Password' id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="rememberMe">
                <input type="checkbox" id="rememberMe" name="rememberMe" /> Remember Me
              </label>
            </div>
            <div className="form-group">
              <button type="submit">Sign In</button>
            </div>
          </form>
          </container1>
          <p>or <br  /> Don't have an Account Yet?</p>
          <Link to="/request">Request Account</Link>
        </div>
      </div>
    );
  }
}

export default signin;
