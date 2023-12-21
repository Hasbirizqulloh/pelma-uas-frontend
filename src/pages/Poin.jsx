import React, { useEffect } from 'react';
import SidebarComponent from '../component/SidebarComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Poin = () => {
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
        <h1>Ini Halaman Poin</h1>
      </SidebarComponent>
    </div>
  );
};

export default Poin;
