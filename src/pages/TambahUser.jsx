import React, { useEffect } from 'react';
import NavbarComponent from '../component/NavbarComponent';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormUser from '../component/FormUser';

const TambahUser = () => {
  return (
    <div className="container-add">
      <NavbarComponent />
      <FormUser />
    </div>
  );
};

export default TambahUser;
