import React, { useEffect } from 'react';
import SidebarComponentAdmin from '../component/SidebarComponentAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListUser from '../component/ListUser';

const User = () => {
  return (
    <SidebarComponentAdmin>
      <ListUser />
    </SidebarComponentAdmin>
  );
};

export default User;
