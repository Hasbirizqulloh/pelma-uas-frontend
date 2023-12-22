import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../features/authSlices';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const FormUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddNewUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signUpUser(formData);
      console.log('Add user successful:', response);
      setFormData({ nama: '', email: '', password: '', role: '' });
      setIsLoading(false);
      navigate('/');
      alert('User Berhasil ditambahkan');
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error('Add user error:', error);
      alert('Add user failed. Please try again.');
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
          <Form onSubmit={handleAddNewUser}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Nama
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="nama" className="input" value={formData.nama} onChange={handleInputChange} placeholder="Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="email" className="input" value={formData.email} onChange={handleInputChange} placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" name="password" className="input" value={formData.password} onChange={handleInputChange} placeholder="******" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Role
              </Form.Label>
              <Col sm="10">
                <Form.Select aria-label="Default select example" name="role" value={formData.role} onChange={handleInputChange}>
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
