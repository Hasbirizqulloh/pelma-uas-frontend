import React, { useEffect } from 'react';
import SidebarComponentAdmin from '../component/SidebarComponentAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HomeAdmin from '../component/HomeAdmin';
import EditLaporan from '../component/EditLaporan';

const DbAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
  }, [isError, navigate]);

  return (
    <div>
      <SidebarComponentAdmin>
        <HomeAdmin />
      </SidebarComponentAdmin>
    </div>
  );
};

export default DbAdmin;
