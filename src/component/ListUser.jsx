import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { getUsers, deleteUser } from '../features/authSlices.js';
import { CgMathPlus, CgPen, CgTrash } from 'react-icons/cg';
import EditUser from './EditUser';

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    getUsers((data) => {
      setUsers(data);
    }, token);
  }, [token]);

  const handleDeleteUser = (userId) => {
    deleteUser(userId, token, () => {
      alert('User berhasil dihapus');
      window.location.reload(); // Melakukan refresh halaman setelah penghapusan berhasil
    });
  };

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
              <tr key={user.userId}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <EditUser userId={user.userId} />
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.userId)}>
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
