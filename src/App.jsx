import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Lapor from './pages/Lapor';
import Poin from './pages/Poin';
import Komunitas from './pages/Komunitas';
import DbAdmin from './pages/DbAdmin';
import LaporAdmin from './pages/LaporAdmin';
import User from './pages/User';
import TambahUser from './pages/TambahUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lapor" element={<Lapor />} />
        <Route path="/poin" element={<Poin />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/dashboardadmin" element={<DbAdmin />} />
        <Route path="/laporan" element={<LaporAdmin />} />
        <Route path="/useradmin" element={<User />} />
        <Route path="/tambahuser" element={<TambahUser />} />
      </Routes>
    </div>
  );
}
export default App;
