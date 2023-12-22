import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUpUser } from '../features/authSlices';
import banner from '../assets/undraw_nature_on_screen_xkli.svg';

const Signup = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isError = useSelector((state) => state.auth.isError);

  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Penanganan perubahan pada input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Penanganan saat form signup disubmit
  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Memanggil aksi Redux untuk pendaftaran pengguna
    dispatch(signUpUser({ name, email, password }));
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-section">
          <form onSubmit={handleSignup} className="form">
            {isError && <p className="has-text-centered">{isError}</p>}
            <h2>Signup</h2>
            <div className="input-box">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-box">
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
              <label htmlFor="password">Password</label>
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
