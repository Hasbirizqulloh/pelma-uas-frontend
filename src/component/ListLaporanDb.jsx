import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgDetailsMore, CgTrash } from 'react-icons/cg';
import { getReport } from '../features/authSlices.js';

const ListLaporanDb = () => {
  const [reports, setReports] = useState([]);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    getReport((data) => {
      setReports(data);
    }, token);
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
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => {
            return (
              <tr key={report.id}>
                <td>{index + 1}</td>
                <td>{report.user.nama}</td>
                <td>{report.user.email}</td>
                <td>
                  <Badge bg={report.status === 'pending' ? 'danger' : report.status === 'in-progress' ? 'warning' : report.status === 'selesai' ? 'primary' : 'secondary'} text="white" style={{ padding: '6px', fontWeight: 'normal' }}>
                    {report.status}
                  </Badge>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListLaporanDb;
