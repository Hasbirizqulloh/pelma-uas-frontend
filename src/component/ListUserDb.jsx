import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { CgMathPlus, CgPen, CgTrash } from 'react-icons/cg';

const ListUserDb = () => {
  const [users, setUser] = useState();
  const token = localStorage.getItem('Authorization');

  const getUser = async () => {
    try {
      const response = await axios.get('https://api-jadi-fix.vercel.app/api/users', {
        headers: {
          Authorization: `${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Tangani kesalahan, misalnya, menampilkan pesan kesalahan kepada pengguna
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(users);

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
