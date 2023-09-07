import React from 'react';
import './Sign_up.css'

export default function SignUp() {
  return (
    <div>
      <p style={{ color: '#F3FDE8', display: 'inline-block', width: '800px', position: 'relative', top: '25px', bottom: '5px', fontSize: '45px', left: '420px', marginBottom: '0' }}>
        <i className="bi bi-mortarboard"></i> <strong>Hostel Management System</strong>
      </p>
      <br />
      <div className="form">
        <form action="#" method="post">
          <label htmlFor="" className="Sign">
            <strong>Sign in to your account</strong>
          </label>
          <br />
          <label className="your" htmlFor="email">
            <strong>Your Email</strong>
          </label>
          <br />
          <input className="text" type="text" name="email" value="" />
          <br />
          <label className="your" htmlFor="password" style={{ paddingTop: '10px' }}>
            <strong>Your Password</strong>
          </label>
          <br />
          <input className="text" type="password" name="password" value="" />
          <br />
          <input className="check" type="checkbox" name="remember" value="" />
          <label htmlFor="remember" style={{ fontSize: '18px' }}>
            Remember me
          </label>
          <br />
          <button type="button" className="btn2">
            Sign in
          </button>
          <br />
          <p className="para">Don't have an account yet?</p>
          <a id="req" href="#">
            Request an Account
          </a>
        </form>
      </div>
    </div>
  );
}
