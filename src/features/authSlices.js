import axios from 'axios';

const API_URL = 'https://api-jadi-fix.vercel.app'; // Gantilah dengan URL API sesuai kebutuhan
const token = localStorage.getItem('Authorization');

const loginUser = async (loginData) => {
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

export default { loginUser };
