import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="card text-white p-5 mx-auto mt-5 text-center" style={{ maxWidth: '800px', background: 'transparent' }}>
        <h2 className="fw-bold mb-4">About Our Application</h2>
        <p className="fs-5">
          This is a Custom React Web Application built for the FER202 course. 
          It demonstrates a full-stack approach to managing a Laptop store, 
          incorporating React Router, Redux, Axios, and Bootstrap.
        </p>
        <p className="fs-6 text-secondary mt-3">
          Developed by Nguyen Anh Minh.
        </p>
      </div>
    );
  }
}

export default About;