import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import banner from '../assets/undraw_nature_on_screen_xkli.svg';
import { loginUser } from '../features/authSlices';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Show loading state
    setIsLoading(true);
    setIsError(false);

    try {
      // Call the loginUser function from authSlices with the login data
      const response = await loginUser({ email, password });

      // Assuming the loginUser function returns a token
      const token = response.data.token;
      const role = response.data.role;
      console.log('role :' + role);
      console.log('token:' + token);
      // Handle successful login, you can save the token to local storage or context
      localStorage.setItem('Authorization', token);

      // Redirect to a different page after successful login
      navigate('/dashboard');
    } catch (error) {
      // Handle login error
      setIsError(true);
      setMessage(error);
    } finally {
      // Hide loading state
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-section">
          <form onSubmit={handleLogin} className="form">
            {isError && <p className="has-text-centered">{message}</p>}
            <h2>Login</h2>
            <div className="input-box">
              <input type="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="">Email</label>
            </div>
            <div className="input-box">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="">Password</label>
            </div>
            <div className="input-box">
              <button type="submit" className="button">
                {isLoading ? 'Loading...' : 'Masuk'}
              </button>
            </div>
            <div className="account-login">
              <label htmlFor="">
                Belum Memiliki Akun? <NavLink to={'/signup'}>Signup</NavLink>
              </label>
            </div>
          </form>
        </div>
        <div className="login-item">
          <div className="content">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
