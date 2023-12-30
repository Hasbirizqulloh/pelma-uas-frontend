import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import ListUserDb from './ListUserDb';
import ListLaporanDb from './ListLaporanDb';
import { getUsers, getReport } from '../features/authSlices';

const HomeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    getUsers((data) => {
      setUsers(data);
    }, token);
  }, [token]);

  useEffect(() => {
    getReport((data) => {
      setReports(data);
    }, token);
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="cards">
          <div className="card-inner">
            <h3>USER</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{users.length}</h1>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h3>LAPORAN</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{reports.length}</h1>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h3>KOMUNITAS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>0</h1>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h3>TINDAKAN</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>0</h1>
        </div>
      </div>
      <ListLaporanDb />
      <ListUserDb />
    </main>
  );
};

export default HomeAdmin;
