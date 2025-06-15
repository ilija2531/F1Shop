import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminLogin from './pages/admin/AdminLogin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* Add more admin routes as needed */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;