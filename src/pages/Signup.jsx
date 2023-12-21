import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { SignUpUser } from '../features/authSlices';
import banner from '../assets/undraw_nature_on_screen_xkli.svg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
  });

  const { name, email, password, confPassword } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      alert('Signup success');
      navigate('/');
    }
  }, [user, isSuccess, dispatch, navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(SignUpUser(formData));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-section">
          <form onSubmit={handleSignup} className="form">
            {isError && <p className="has-text-centered">{message}</p>}
            <h2>Signup</h2>
            <div className="input-box">
              <input type="text" name="name" value={name} onChange={handleInputChange} required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-box">
              <input type="e-mail" name="email" value={email} onChange={handleInputChange} required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              <input type="password" name="password" value={password} onChange={handleInputChange} required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-box">
              <input type="password" name="confPassword" value={confPassword} onChange={handleInputChange} required />
              <label htmlFor="confPassword">Confirm Password</label>
            </div>
            <div className="input-box">
              <button type="submit" className="button">
                {isLoading ? 'Loading...' : 'Register'}
              </button>
            </div>
            <div className="account-login">
              <label htmlFor="">
                Already have an account? <NavLink to={'/'}>Login</NavLink>
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

export default Signup;
