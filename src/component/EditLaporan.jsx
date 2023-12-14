import React, { useState, useEffect } from 'react';
import { CgDetailsMore, CgPen } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function MyVerticallyCenteredModal({ show, onHide, reportId }) {
  const [reportDetails, setReportDetails] = useState(null);
  const [statusLaporan, setStatusLaporan] = useState('');

  useEffect(() => {
    const fetchReportDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/reports/${reportId}`);
        setReportDetails(response.data);
      } catch (error) {
        console.error('Error fetching report details:', error);
      }
    };

    if (show) {
      fetchReportDetails();
    }
  }, [show, reportId]);

  const handleStatusChange = (e) => {
    setStatusLaporan(e.target.value); // Memperbarui status_laporan saat terjadi perubahan pada dropdown
  };

  const updateReportStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/reports/${reportId}`, {
        report_status: statusLaporan,
      });
      console.log(statusLaporan);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">DETAIL LAPORAN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {reportDetails ? (
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Nama
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue={`${reportDetails.user.name}`} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue={`${reportDetails.user.email}`} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Status Laporan
                </Form.Label>
                <Col sm="10">
                  <Form.Select aria-label="Default select example" value={statusLaporan} onChange={handleStatusChange}>
                    <option>{reportDetails.report_status}</option>
                    <option value="pending">pending</option>
                    <option value="in-progress">in-progress</option>
                    <option value="selesai">selesai</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Isi Laporan
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" rows={3} readOnly defaultValue={`${reportDetails.report_content}`} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Foto
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" rows={3} readOnly defaultValue={`${reportDetails.image_url}`} />
                </Col>
              </Form.Group>
            </Form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} className="btn btn-danger btn-sm me-2">
          <AiOutlineClose /> Close
        </Button>
        <button onClick={updateReportStatus} className="btn btn-primary btn-sm me-2">
          <CgPen /> Simpan
        </button>
      </Modal.Footer>
    </Modal>
  );
}

const EditLaporan = ({ reportId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button className="btn btn-primary btn-sm me-2" onClick={() => setModalShow(true)}>
        <CgDetailsMore /> Lihat
      </Button>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} reportId={reportId} />
    </>
  );
};

export default EditLaporan;
