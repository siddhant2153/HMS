import React from 'react'; // Import React
import './Home.css';

export default function Home() {
  return (
    <div>
      <div className="BodyHome">
        <p className="setting"><strong>Settings</strong></p>
        <div className="change-password">
          <div className="space">
            <p className="change">
              <strong>Change Password</strong>
            </p>
            <form className="" action="#" method="post">
              <label className="old-pass" htmlFor="oldPassword">Your Old Password</label>
              <input className="old-pass-box" type="password" name="oldPassword" id="oldPassword" /><br />

              <label className="new-pass" htmlFor="newPassword">Your New Password</label>
              <input className="new-pass-box" type="password" name="newPassword" id="newPassword" /><br />
            </form>
            <button className="Change-password">Change Password</button>
          </div>
        </div>
        <img className="image-position" src="E:\The Complete 2021 Web Development Bootcamp\Project of Web Development\setting.png" alt="Settings" />
      </div>
    </div>
  );
}
