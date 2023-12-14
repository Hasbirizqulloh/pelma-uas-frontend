import React, { useState, useEffect } from 'react';
import { CgDetailsMore, CgPen } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function MyVerticallyCenteredModal({ show, onHide, userId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [role, setRole] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        const userData = response.data;

        setName(userData.name);
        setEmail(userData.email);
        setRole(userData.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    if (show) {
      getUserById();
    }
  }, [show, userId]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${userId}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      onHide();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateUser}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Nama
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Role
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)}>
                <option>{role}</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Col>
          </Form.Group>
          {/* Tambahkan Form Group lainnya sesuai kebutuhan */}
          <div className="row1">
            <Button onClick={onHide} className="btn btn-danger me-2">
              <AiOutlineClose /> Close
            </Button>
            <Button type="submit" className="btn btn-primary">
              <CgPen /> Simpan
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const EditUser = ({ userId }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className="btn btn-primary btn-sm me-2" onClick={() => setModalShow(true)}>
        <CgPen /> Edit
      </Button>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} userId={userId} />
    </>
  );
};

export default EditUser;
