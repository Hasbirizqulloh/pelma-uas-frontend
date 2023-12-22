import React, { useState, useEffect } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser, getMe } from '../features/authSlices';
import aset from '../assets/react.svg';

const SidebarComponentAdmin = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem('Authorization');
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutUser(token);
      alert('Logout success');
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  const SidebarMenu = [
    {
      path: '/dashboardAdmin',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/laporan',
      name: 'Laporan',
      icon: <FaRegChartBar />,
    },
    {
      path: '/useradmin',
      name: 'User',
      icon: <FaUserAlt />,
    },
  ];

  useEffect(() => {
    getMe(token).then((res) => {
      setUserData(res.data);
    });
  });

  return (
    <div className="containers">
      <div className="sidebar">
        <div className="top_section">
          <div className="logo-name">PELMA ADMIN</div>
          <i className="bars">
            <FaBars />
          </i>
        </div>
        <div className="list-section">
          {SidebarMenu.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}

          <div className="profile">
            <NavLink>
              <div className="profile-details">
                <img src={aset} alt="" />
                <div className="name_job">
                  <div className="name">{userData && userData.name}</div>
                  <div className="job">{userData && userData.role}</div>
                </div>
              </div>
            </NavLink>
            <i className="logout">
              <a onClick={handleLogout}>
                <CgLogOut />
              </a>
            </i>
          </div>
        </div>
      </div>
      <section className="content-sidebar">
        <main>{children}</main>
      </section>
    </div>
  );
};

export default SidebarComponentAdmin;
