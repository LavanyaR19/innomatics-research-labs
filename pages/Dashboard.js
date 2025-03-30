import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }
            try {
                const res = await axios.get('http://localhost:5000/api/auth/me', {
                    headers: { Authorization: token }
                });
                setUser(res.data);
            } catch (err) {
                alert('Session expired. Please login again.');
                localStorage.removeItem('token');
                navigate('/login');
            }
        };
        fetchUser();
    }, [navigate]);

    return (
        <div>
            <h2>Welcome, {user ? user.name : 'Loading...'}</h2>
            <button onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>Logout</button>
        </div>
    );
}

export default Dashboard;
