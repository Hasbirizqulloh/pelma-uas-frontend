import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const FormUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [role, setRole] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate('/useradmin');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const goBack = () => {
    navigate('/useradmin'); // Navigasi kembali ke halaman dashboard
  };
  return (
    <div className="section-add vh-100">
      <div className="section-form shadow-lg pt-4 border-1 rounded-4">
        <Row className="row3 rounded-2">
          <h3>TAMBAH USER</h3>
        </Row>
        <Row>
          <Form onSubmit={saveUser}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Nama
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Confirm Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="******" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Role
              </Form.Label>
              <Col sm="10">
                <Form.Select aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <div className="row1">
              <button className="btn btn-danger" onClick={goBack}>
                Kembali
              </button>
              <button className="btn btn-primary">Tambah Data</button>
            </div>
          </Form>
        </Row>
      </div>
    </div>
  );
};

export default FormUser;
