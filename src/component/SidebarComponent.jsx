import React from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/authSlices';
import aset from '../assets/react.svg';

const SidebarComponent = ({ children }) => {
  const handleLogout = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('Authorization');
    console.log('ini token ' + token);
    try {
      await logoutUser(token);
      alert('Logout success');
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/lapor',
      name: 'Lapor',
      icon: <FaUserAlt />,
    },
    {
      path: '/poin',
      name: 'Poin',
      icon: <FaRegChartBar />,
    },
    {
      path: '/komunitas',
      name: 'Komunitas',
      icon: <FaCommentAlt />,
    },
  ];

  return (
    <div className="containers">
      <div className="sidebar">
        <div className="top_section">
          <div className="logo-name">PELMA</div>
          <i className="bars">
            <FaBars />
          </i>
        </div>
        <div className="list-section">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}

          <div className="profile">
            <NavLink>
              <div className="profile-details">
                {/* <img src={aset} alt="" /> */}
                <div className="name_job">
                  <div className="name">udin</div>
                  <div className="job">Poin: 0</div>
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

export default SidebarComponent;
