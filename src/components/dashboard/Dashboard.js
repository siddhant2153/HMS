import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  // Define state variables
  const [unpaidInvoices, setUnpaidInvoices] = useState([
    { name: 'Mess Fee', amount: 'Rs. 3000' },
    // Add more unpaid invoices if needed
  ]);

  return (
    <div className="BodyDashboard">
      <p className="welcome">
        <strong>Welcome</strong>
      </p>
      <p className="other-name">
        <strong>Following name</strong>
      </p>

      <div className="Unpaid-Section">
        <p className="unpaid-invoice">
          <strong>Unpaid Invoices</strong>
        </p>
        {unpaidInvoices.map((invoice, index) => (
          <div key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingLeft: '15px', width: '22', height: '22' }}
              fill="currentColor"
              className="bi bi-clock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            </svg>
            <p className="Unpaid">{invoice.name}</p>
            <p className="three">{invoice.amount}</p>
          </div>
        ))}
      </div>
      <div className="Unpaid-section">{/* Add more content if needed */}</div>
    </div>
  );
}

export default Dashboard;
