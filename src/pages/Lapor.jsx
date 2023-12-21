import React, { useEffect } from 'react';
import SidebarComponent from '../component/SidebarComponent';
import LaporanComponent from '../component/LaporanComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Lapor = () => {
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
      <SidebarComponent>
        <LaporanComponent />
      </SidebarComponent>
    </div>
  );
};

export default Lapor;
