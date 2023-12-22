import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { signUpUser } from '../features/authSlices';
import banner from '../assets/undraw_nature_on_screen_xkli.svg';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signUpUser(formData);
      console.log('Signup successful:', response);
      setFormData({ nama: '', email: '', password: '' });
      setIsLoading(false);
      navigate('/');
      alert('Signup successful! You can now login.');
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-section">
          <form onSubmit={handleSignup} className="form">
            <h2>Signup</h2>
            <div className="input-box">
              <input type="text" name="nama" value={formData.nama} onChange={handleInputChange} required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-box">
              <input type="e-mail" name="email" value={formData.email} onChange={handleInputChange} required />
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
