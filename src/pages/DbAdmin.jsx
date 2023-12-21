import React, { useEffect } from 'react';
import SidebarComponentAdmin from '../component/SidebarComponentAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HomeAdmin from '../component/HomeAdmin';
import EditLaporan from '../component/EditLaporan';

const DbAdmin = () => {
  return (
    <div>
      <SidebarComponentAdmin>
        <HomeAdmin />
      </SidebarComponentAdmin>
    </div>
  );
};

export default DbAdmin;
