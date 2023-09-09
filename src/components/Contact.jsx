import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    if (subject.trim() === '') {
      alert('Please enter the subject.');
      return;
    }

    if (message.trim() === '') {
      alert('Please enter your message.');
      return;
    }

    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // You can add code here to submit the form data to a server or perform other actions
  };

  return (
    <div className='ac'>
      <form onSubmit={handleSubmit}>
        <h2><strong>Contact Us</strong></h2> <br />
        <p>If you are facing any problem or have any questions, please let us know.</p>

        <label>Your email:</label>
        <input
          placeholder='name@gmail.com'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Subject:</label>
        <input
          placeholder='Let us know How We can Help You'
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label>Your Message:</label>
        <textarea
         placeholder='Leave a comment...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea><br />
       
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
