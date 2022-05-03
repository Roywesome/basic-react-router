import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const fakeAuth = new Promise((resolve) => {
  setTimeout(() => resolve('2342f2f1d131rf12'), 300);
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  //localStorage

  useEffect(() => {
    const data = localStorage.getItem('user');
    data && data !== null ? setToken(JSON.parse(data)) : setToken(null);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', token);
  }, [token]);

  const handleLogin = async () => {
    const token = await fakeAuth;

    setToken(token);
    /*navigate('/dashboard');*/

    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
