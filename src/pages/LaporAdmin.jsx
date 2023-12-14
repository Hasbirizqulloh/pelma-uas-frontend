import React, { useEffect } from 'react';
import SidebarComponentAdmin from '../component/SidebarComponentAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlices';
import ListLaporan from '../component/ListLaporan';

const LaporAdmin = () => {
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
    <SidebarComponentAdmin>
      <ListLaporan />
    </SidebarComponentAdmin>
  );
};

export default LaporAdmin;
