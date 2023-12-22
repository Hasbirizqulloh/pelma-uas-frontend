import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { getUsers } from '../features/authSlices.js';
import { CgMathPlus, CgPen, CgTrash } from 'react-icons/cg';

const ListUserDb = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers(token);
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [token]);

  console.log(users); // Untuk memeriksa nilai users di console

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
              <tr key={user.userId}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
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
