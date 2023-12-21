import React, { useEffect } from 'react';
import SidebarComponent from '../component/SidebarComponent';
import Header from '../component/Header';
import ListKomunitas from '../component/ListKomunitas';
import Riwayat from '../component/Riwayat';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <SidebarComponent>
        <Header />
        <ListKomunitas />
        <Riwayat />
      </SidebarComponent>
    </div>
  );
};

export default Dashboard;
