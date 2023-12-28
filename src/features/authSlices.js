import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://api-jadi-fix.vercel.app'; // Gantilah dengan URL API sesuai kebutuhan
const token = localStorage.getItem('Authorization');

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const loginUser = async (loginData) => {
  try {
    // Panggil API untuk login menggunakan Axios
    const response = await axios.post(`${API_URL}/api/users/login`, loginData);

    // Mengembalikan respons dari server (misalnya, token atau informasi lainnya)
    return response.data;
  } catch (error) {
    // Menghandle kesalahan selama proses login
    throw error.response ? error.response.data : error.message;
  }
};

export const signUpUser = async (signupData) => {
  try {
    const response = await axios.post(`${API_URL}/api/users`, signupData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const logoutUser = async (token) => {
  try {
    // Panggil API untuk logout menggunakan Axios

    if (!token) {
      throw new Error('Token not found');
    }

    // Panggil API untuk logout dengan menyertakan token dalam header Authorization
    await axios.delete(`${API_URL}/api/users/logout`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    // Hapus token dari localStorage
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Roles');

    console.log('Logout berhasil');
  } catch (error) {
    // Menghandle kesalahan selama proses logout
    throw error.response ? error.response.data : error.message;
  }
};

export const getMe = async (token) => {
  try {
    // Panggil API untuk mendapatkan data user menggunakan Axios
    const response = await axios.get(`${API_URL}/api/usersget/me`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    if (!token) {
      throw new Error('Token not found');
    }
    return response.data;
  } catch (error) {
    // Menghandle kesalahan selama proses mendapatkan data user
    throw error.response ? error.response.data : error.message;
  }
};

export const getUsers = async (callback, token) => {
  await axios
    .get(`${API_URL}/api/users`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      callback(res.data.data);
    })
    .catch((error) => {
      throw error.response ? error.response.data : error.message;
    });
};

export const getUserById = async (id, token) => {
  try {
    const response = await axios.get(`${API_URL}/api/users/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const deleteUser = async (id, token, callback) => {
  try {
    const response = await axios.delete(`${API_URL}/api/users/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (callback) {
      callback(); // Panggil callback jika penghapusan berhasil
    }

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const updateUser = async (id, userData, token) => {
  try {
    const response = await axios.patch(`${API_URL}/api/users/${id}`, userData, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Report
export const createReport = async (reportData, token) => {
  try {
    const response = await axios.post(`${API_URL}/api/reports`, reportData, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getReport = async (callback, token) => {
  axios
    .get(`${API_URL}/api/reports`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      callback(res.data.data);
    })
    .catch((error) => {
      throw error.response ? error.response.data : error.message;
    });
};

export const deleteReport = async (id, token, callback) => {
  console.log(id);
  try {
    const response = await axios.delete(`${API_URL}/api/reports/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (callback) {
      callback(); // Panggil callback jika penghapusan berhasil
    }

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getReportById = async (id, token) => {
  try {
    const response = await axios.get(`${API_URL}/api/reports/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const updateReport = async (id, reportData, token) => {
  try {
    const response = await axios.patch(`${API_URL}/api/reports/${id}`, reportData, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
