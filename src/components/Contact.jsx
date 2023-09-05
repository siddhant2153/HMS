import React from 'react';

import './Contact.css'; // Import your CSS file

class Contact extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: ' #273b8b' }}>
        <form className="contact-form" action="index.html" method="post">
          <p className="white-para1"><strong>Contact Us</strong></p>
          <p className="white-para2">If you are facing any problem or have any questions, let us know</p><br />
          <table className="form-table">
            <tbody>
              <tr>
                <td className="form-cell">
                  <label className="white-label" htmlFor="email">Your email</label>
                  <input className="white-input" type="text" id="email" name="email" /><br />

                  <label className="white-label" htmlFor="subject">Subject</label>
                  <input className="white-input" type="text" id="subject" name="subject" /><br />

                  <label className="white-label" htmlFor="message">Your Message</label>
                  <textarea className="white-textarea" id="message" name="message"></textarea><br />

                  <button className="btn btn-primary" type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Contact;
