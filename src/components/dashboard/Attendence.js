import React from 'react';
import './Attendence.css'


export default function Attendence() {
  return (
    <div>
      <div className="BodyAttendence">
        <p className="attend">
          <strong>Attendance</strong>
        </p>
        <p className="total-days">
          Total Days: 28 Days
        </p>
        <p className="present-days">
          Present Days: 16 Days
        </p>
        <p className="absent-days">
          Absent Days: 2 Days
        </p>
        <div className="graph">
          <img className="size-graph" src="E:\The Complete 2021 Web Development Bootcamp\Project of Web Development\graph.jpg" alt="Graph" />
        </div>
        <div className="this-week">
          <p className="This">
            This Week
          </p>
          <p className="monday">
            Monday, May 22, 2023<br />Absent
          </p>
          <hr />
          <p className="sunday">
            Saturday, Thursday 12, 2203 <br />Present
          </p>
        </div>
      </div>
    </div>
  );
}
