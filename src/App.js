import React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div>
      <h1>My App</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}
