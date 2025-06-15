import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            navigate("/admin/login");
        }
    }, [navigate]);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Here you can manage products, orders, and users.</p>
      {/* Add more admin functionalities here */}
    </div>
  );
}

export default AdminDashboard;