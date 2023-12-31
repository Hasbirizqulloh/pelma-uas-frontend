import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { getUsers } from '../features/authSlices.js';
import { CgMathPlus, CgPen, CgTrash } from 'react-icons/cg';
import { Spinner } from 'react-bootstrap';

const ListUserDb = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    getUsers((data) => {
      setUsers(data);
      setIsLoading(false);
    }, token);
  }, [token]);

  return (
    <div className="mt-3">
      <div className="mb-3">
        <h3>Data User Aktif</h3>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                <Spinner animation="border" variant="primary" />
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.userId}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ListUserDb;
