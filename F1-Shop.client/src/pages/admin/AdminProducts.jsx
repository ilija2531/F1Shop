import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function AdminProducts() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        }
    }, [navigate]);

  return (
    <div className="admin-products">
      <h1>Admin Products Page</h1>
      <p>This is where you can manage products.</p>
      {/* Add product management components here */}
    </div>
  );
}

export default AdminProducts;