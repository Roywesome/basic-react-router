import React, { useState, useEffect } from 'react';
import './style.css';
import {
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import NoMatch from './components/NoMatch';

const getUserId = () => {
  let id;
  let data = localStorage.getItem('user');
  if (data && data !== null) {
    id = JSON.parse(data);
  } else {
    id = null;
  }
  return id;
};

export default function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(getUserId());
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(token));
  }, [token]);

  const handleLogin = async () => {
    const token = await fakeAuth;

    setToken(token);
    navigate('/dashboard');

    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div>
      <h1>My App</h1>

      <Layout token={token} onLogout={handleLogout} />

      <Routes>
        <Route index element={<Home token={token} onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={<Home token={token} onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute token={token}>
              <Dashboard token={token} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

const fakeAuth = new Promise((resolve, reject) => {
  setTimeout(() => resolve('2342f2f1d131rf12'), 300);
});

//Rutas protegidas
const ProtectedRoute = ({ children, token }) => {
  const location = useLocation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};
