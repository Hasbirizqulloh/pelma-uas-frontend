import React, { useEffect } from 'react';
import SidebarComponent from '../component/SidebarComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Poin = () => {
  return (
    <div>
      <SidebarComponent>
        <h1>Ini Halaman Poin</h1>
      </SidebarComponent>
    </div>
  );
};

export default Poin;
