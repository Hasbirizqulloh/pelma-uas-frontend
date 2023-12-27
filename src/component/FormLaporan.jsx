import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { createReport } from '../features/authSlices.js';

const FormLaporan = () => {
  const [laporan, setLaporan] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('Authorization');

  const handleCreateReport = async (e) => {
    e.preventDefault();
    try {
      const response = await createReport(laporan, token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-form mb-4">
      <div>
        <Card className="rounded-4 shadow-sm">
          <div className="head">
            <h3 className="center">Silahkan sampaikan kondisi lingkungan Anda</h3>
          </div>
          <div className="main-section">
            <Form onSubmit={saveReport}>
              <p className="has-text-centered">{msg}</p>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Isi laporan Anda disini" type="text" value={report} onChange={(e) => setLaporan(e.target.value)} />
              </Form.Group>
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FormLaporan;
