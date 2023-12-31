import React, { useState, useEffect } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser, getMe } from '../features/authSlices';
import aset from '../assets/react.svg';
import { Spinner } from 'react-bootstrap';

const SidebarComponentAdmin = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const token = localStorage.getItem('Authorization');
  const handleLogout = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Apakah Anda yakin ingin logout?');

    if (confirmed) {
      setLogoutLoading(true); // Aktifkan loading sebelum logout
      try {
        await logoutUser(token);
        setTimeout(() => {
          alert('Logout success');
          window.location.href = '/';
        }, 0); // Contoh penundaan logout agar pesan alert "Loading" terlihat
      } catch (error) {
        console.log(error);
      } finally {
        setLogoutLoading(false); // Nonaktifkan loading setelah logout selesai
      }
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
      setIsLoading(false);
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
          <div className="lg" onClick={handleLogout}>
            {logoutLoading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <div className="icon">
                <CgLogOut />
              </div>
            )}
            <div className="link_text">Logout</div>
          </div>

          <div className="profile">
            <NavLink>
              <div className="profile-details">
                <img src={aset} alt="" />
                <div className="name_job">
                  {isLoading ? (
                    <Spinner animation="border" variant="primary" />
                  ) : (
                    <>
                      <div className="name">{userData && userData.nama}</div>
                      <div className="job">{userData && userData.role}</div>
                    </>
                  )}
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
