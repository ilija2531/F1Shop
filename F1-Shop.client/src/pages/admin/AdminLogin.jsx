import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            if (response.data.isAdmin) {
                localStorage.setItem("adminToken", response.data.token);
            navigate("/admin");
            } else {
                setError("Access denied. Admins only.");
            }
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };
    return (
        <div className="admin-login">
            <h1>Admin Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default AdminLogin;