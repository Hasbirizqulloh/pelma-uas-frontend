import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { CgMathPlus, CgPen, CgTrash } from 'react-icons/cg';

const ListUserDb = () => {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/reports/${userId}`);
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

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
          {users.map((user, index) => {
            return (
              <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>

                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListUserDb;
