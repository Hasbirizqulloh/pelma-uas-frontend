import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { createReport } from '../features/authSlices.js';

const FormLaporan = () => {
  const [laporan, setLaporan] = useState({
    report: '',
  });
  const [msg, setMsg] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('Authorization');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLaporan({
      ...laporan,
      [name]: value,
    });
  };
  const handleCreateReport = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await createReport(laporan, token);
      console.log(response);
      alert('berhasil melaporkan');
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
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
            <Form onSubmit={handleCreateReport}>
              <p className="has-text-centered">{msg}</p>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Isi laporan Anda disini" type="text" name="report" value={laporan.report} onChange={handleInputChange} />
              </Form.Group>
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                {isLoading ? 'Melaporkan' : 'submit'}
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FormLaporan;
