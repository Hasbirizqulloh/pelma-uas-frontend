import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const FormLaporan = () => {
  const [report, setLaporan] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('Authorization');

  const saveReport = async (e) => {
    console.log(token);
    e.preventDefault();
    try {
      await axios.post('https://api-jadi-fix.vercel.app/api/reports', {
        headers: {
          Authorization: token,
          'content-type': 'application/json',
        },
      });
      setMsg('Berhasil');
      console.log(msg);
      alert('Berhasil');
      window.location.reload();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
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
