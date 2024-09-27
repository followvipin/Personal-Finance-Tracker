import React, { useState } from 'react';

const LoginForm = ({ onBack}) => {
  const [formData, setFormData] = useState({
    user_name: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        localStorage.setItem('token', data.token); // Save token to localStorage
        console.log('User authenticated, token:', data.token);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {success ? (
        <p className="success-message">Login successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Username"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" id="login">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
