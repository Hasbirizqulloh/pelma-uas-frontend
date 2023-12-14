import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgTrash } from 'react-icons/cg';
import axios from 'axios';
import EditLaporan from './EditLaporan';

const ListLaporan = () => {
  const [reports, setReport] = useState([]);

  const getReports = async () => {
    const response = await axios.get('http://localhost:5000/reports');
    setReport(response.data);
  };

  const deleteReports = async (reportId) => {
    await axios.delete(`http://localhost:5000/reports/${reportId}`);
    getReports();
  };

  useEffect(() => {
    getReports();
  }, []);

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
          {reports.map((report, index) => {
            return (
              <tr key={report.uuid}>
                <td>{index + 1}</td>
                <td>{report.user.name}</td>
                <td>{report.user.email}</td>
                <td>
                  <Badge
                    bg={report.report_status === 'pending' ? 'danger' : report.report_status === 'in-progress' ? 'warning' : report.report_status === 'selesai' ? 'primary' : 'secondary'}
                    text="white"
                    style={{ padding: '6px', fontWeight: 'normal' }}
                  >
                    {report.report_status}
                  </Badge>
                </td>

                <td>
                  <EditLaporan reportId={report.uuid} />
                  <button className="btn btn-danger btn-sm" onClick={() => deleteReports(report.uuid)}>
                    <CgTrash /> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListLaporan;
