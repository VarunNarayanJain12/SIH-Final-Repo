// components/RegistrationForm.js
import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    aadhar: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="leftSection">
      <div className="bgBlue"></div>
      <div className="content">
        <h1 className="leftHead">Welcome to Startup Registration</h1>
        <p className="subheading">
          "Your gateway to simplifying and accelerating your journey towards
          integrating AYUSH into mainstream healthcare"
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="firstRow">
            <div className="input-group">
              <label htmlFor="firstName" className="label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName" className="label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="secondRow">
            <div className="input-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="thirdRow">
            <div className="input-group">
              <label htmlFor="aadhar" className="label">Aadhar number</label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                className="input"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="login">
            <button type="submit" className="Loginbtn">Submit</button>
            <p className="sign">Already have an account? <a href="#login">Sign in</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;