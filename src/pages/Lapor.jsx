import React, { useEffect } from 'react';
import SidebarComponent from '../component/SidebarComponent';
import LaporanComponent from '../component/LaporanComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Lapor = () => {
  return (
    <div>
      <SidebarComponent>
        <LaporanComponent />
      </SidebarComponent>
    </div>
  );
};

export default Lapor;
