import React, { useState, useEffect } from 'react';
import { CgDetailsMore, CgPen } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Spinner } from 'react-bootstrap';
import { getReportById, updateReport } from '../features/authSlices.js';

function MyVerticallyCenteredModal({ show, onHide, reportId }) {
  const [reportDetails, setReportDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [token] = useState(localStorage.getItem('Authorization'));

  useEffect(() => {
    getReportById(reportId, token).then((res) => {
      setReportDetails(res.data);
    });
  }, [show, reportId]);

  const handleReportUpdate = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const updatedReportData = {
        status: reportDetails.status,
      };
      const response = await updateReport(reportId, updatedReportData, token);
      response.data;
      setIsLoading(false);
      alert('Report updated successfully');
      window.location.reload();
    } catch (error) {
      console.log(error);
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
                  <Form.Control plaintext readOnly defaultValue={`${reportDetails.user.nama}`} />
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
                  <Form.Select aria-label="Default select example" onChange={(e) => setReportDetails({ ...reportDetails, status: e.target.value })}>
                    <option>{reportDetails.status}</option>
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
                  <Form.Control as="textarea" rows={3} readOnly defaultValue={`${reportDetails.report}`} />
                </Col>
              </Form.Group>
            </Form>
          </div>
        ) : (
          <Spinner animation="grow" variant="primary" />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} className="btn btn-danger btn-sm me-2">
          <AiOutlineClose /> Close
        </Button>
        <button className="btn btn-primary btn-sm me-2" onClick={handleReportUpdate}>
          <CgPen /> {isLoading ? 'Menyimpan...' : 'Simpan'}
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
