import React, { useState } from 'react';
import './regis.css';
import vincwallp from '../Resource/VincWallp-LOGSIGN3.png'

const Regis = () => {
  const [formData, setFormData] = useState({
    mobileOrEmail: '',
    password: '',
    fullName: '',
    username: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.mobileOrEmail) newErrors.mobileOrEmail = 'Mobile or Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      setErrors({});
      alert('Registration successful!');
    }
  };

  return (
    <div className="regis-container">
  <img src= {vincwallp} alt="Person" className="profile-image" />
  <div className="form-container">
    <h2>Sign up</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="mobileOrEmail"
        placeholder="Mobile Number or Email"
        value={formData.mobileOrEmail}
        onChange={handleChange}
      />
      {errors.mobileOrEmail && <p className="error">{errors.mobileOrEmail}</p>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <p className="error">{errors.fullName}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <p className="error">{errors.username}</p>}
      <p className="terms">
        People who use our service may have uploaded your contact information to Instagram. <a>Learn More</a>
      </p>
      <p className="terms">
        By signing up, you agree to our <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>.
      </p>
      <button type="submit" className="regis-button">Sign up</button>
    </form>
  </div>
</div>
  );
}

export default Regis;
