import React, { useState } from 'react';
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
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
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          {/* Password input wrapped in a container */}
          <div className="password-container">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="eye-icon"
            />
          </div> 

          <button type="submit" id="login">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;



// import React, { useState } from 'react';
// import './LoginForm.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const LoginForm = ({ onBack}) => {
//   const [formData, setFormData] = useState({
//     user_name: '',
//     password: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword); // Toggle password visibility
//    };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Send the form data as JSON
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess(true);
//         localStorage.setItem('token', data.token); // Save token to localStorage
//         console.log('User authenticated, token:', data.token);
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       setError('Login failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       {success ? (
//         <p className="success-message">Login successful!</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             name="user_name"
//             // placeholder="Username"
//             value={formData.user_name}
//             onChange={handleChange}
//             required
//           />
//           {/* <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           /> */}

//           <div className="password-container">
//             <label htmlFor="password">Password:</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <FontAwesomeIcon
//               icon={showPassword ? faEyeSlash : faEye}
//               onClick={togglePasswordVisibility}
//               style={{
//                   position: "absolute",
//                   right: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   cursor: "pointer",
//                   }}
//               />
//           </div> 
//           <button type="submit" id="login">Login</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginForm;
