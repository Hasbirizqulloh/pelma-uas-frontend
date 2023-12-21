import React, { useEffect } from 'react';
import SidebarComponentAdmin from '../component/SidebarComponentAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListLaporan from '../component/ListLaporan';

const LaporAdmin = () => {
  return (
    <SidebarComponentAdmin>
      <ListLaporan />
    </SidebarComponentAdmin>
  );
};

export default LaporAdmin;
