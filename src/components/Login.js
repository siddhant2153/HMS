import React from 'react';
import './Login.css';

export default function LOGIN() {
  return (
    <div style={{ backgroundColor: '#141E46' }}>
      <div className="text">
        <h1 className="white-heading-hostel"> Hostel</h1> <h1 className="blue-heading">Management </h1> <h1 className="white-heading">System</h1><br/>
        <p className="white-heading-para">
          Our Solution For All Of The Hostel's Needs
        </p>
        <button type="button" className="btn-login">Login</button>
        <p className="or-text-white">
          or
        </p>
        <a className="registration" href="#">Request Registration</a>
      </div>

      <div className="image">
        <img className="size-image" src="assest/image/cartoon-1.webp" alt="" />
    </div>
      </div>
  );
}
