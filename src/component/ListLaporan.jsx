import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgTrash } from 'react-icons/cg';
import { getReport, deleteReport } from '../features/authSlices.js';
import EditLaporan from './EditLaporan';
import { Spinner } from 'react-bootstrap';

const ListLaporan = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingdel, setIsLoadingdel] = useState(false);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    getReport((data) => {
      setReports(data);
      setIsLoading(false);
    }, token);
  }, []);

  const handleDeleteReport = (reportId) => {
    const confirmation = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
    if (confirmation) {
      setIsLoadingdel(true);
      deleteReport(reportId, token, () => {
        alert('Laporan berhasil dihapus');
        window.location.reload();
        // setNavigate(true);
      });
    }
  };

  return (
    <div className="mt-3">
      <h3>Data Laporan Masuk</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Pelapor</th>
            <th>Email</th>
            <th>Status Laporan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                <Spinner animation="border" variant="primary" />
              </td>
            </tr>
          ) : isLoadingdel ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                <Spinner animation="grow" variant="warning" />
                <p>Deleting report...</p>
              </td>
            </tr>
          ) : (
            reports.map((report, index) => (
              <tr key={report.id}>
                <td>{index + 1}</td>
                <td>{report.user.nama}</td>
                <td>{report.user.email}</td>
                <td>
                  <Badge bg={report.status === 'pending' ? 'danger' : report.status === 'in-progress' ? 'warning' : report.status === 'selesai' ? 'primary' : 'secondary'} text="white" style={{ padding: '6px', fontWeight: 'normal' }}>
                    {report.status}
                  </Badge>
                </td>
                <td>
                  <EditLaporan reportId={report.id} />
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteReport(report.id)}>
                    <CgTrash /> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ListLaporan;
