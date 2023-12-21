import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlices';
import banner from '../assets/undraw_nature_on_screen_xkli.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      // Check user role and navigate accordingly
      if (user.role === 'user') {
        navigate('/dashboard');
      } else if (user.role === 'admin') {
        navigate('/dashboardadmin');
      }
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-section">
          <form onSubmit={Auth} className="form">
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
              <NavLink to={'/dashboard'}>
                <button type="submit" className="button">
                  {isLoading ? 'Loading...' : 'Masuk'}
                </button>
              </NavLink>
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
