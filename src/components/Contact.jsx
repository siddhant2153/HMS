import React, { useState } from 'react';
import './Contact.css'

export default function ContactForm() {
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
        <p><strong>Contact Us</strong></p>
        <p>If you are facing any problem or have any questions, please let us know.</p>

        <label>Your email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label>Your Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
