import React, { useEffect } from 'react';
import SidebarComponent from '../component/SidebarComponent';
import KomunitasComponent from '../component/KomunitasComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Komunitas = () => {
  return (
    <div>
      <SidebarComponent>
        <KomunitasComponent />
      </SidebarComponent>
    </div>
  );
};

export default Komunitas;
