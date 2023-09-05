import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Hostel</h1>
        <p>Your Home Away from Home</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Comfortable Rooms</h2>
          <p>We offer spacious and cozy rooms for your comfort.</p>
        </div>
        <div className="feature">
          <h2>Delicious Meals</h2>
          <p>Enjoy our mouthwatering cuisine in our dining hall.</p>
        </div>
        <div className="feature">
          <h2>24/7 Support</h2>
          <p>Our staff is available around the clock to assist you.</p>
        </div>
      </section>
      
    </div>
  );
}
