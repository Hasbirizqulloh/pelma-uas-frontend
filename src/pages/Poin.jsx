import React, { useEffect } from 'react';
import SidebarComponent from '../component/SidebarComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PoinComponent from '../component/PoinComponent';

const Poin = () => {
  return (
    <div>
      <SidebarComponent>
        <PoinComponent />
      </SidebarComponent>
    </div>
  );
};

export default Poin;
