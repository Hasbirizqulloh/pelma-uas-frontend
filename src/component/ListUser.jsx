import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { CgMathPlus, CgPen, CgTrash } from 'react-icons/cg';
import EditUser from './EditUser';

const ListUser = () => {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="mt-3">
      <div className="mb-3">
        <h3>Data User Aktif</h3>
        <Link to={'/tambahuser'}>
          <button className="btn btn-primary">
            <CgMathPlus /> Tambah
          </button>
        </Link>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                <td>
                  <EditUser userId={user.uuid} />
                  {/* <button className="btn btn-primary btn-sm me-2">
                    <CgPen /> Edit
                  </button> */}
                  <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.uuid)}>
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

export default ListUser;
