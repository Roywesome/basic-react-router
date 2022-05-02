import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

const Layout = ({ token, onLogout }) => {
  return (
    <>
      <nav>
        <NavLink to="/home">Home</NavLink>{' '}
        <NavLink to="/dashboard">Dashboard</NavLink>{' '}
        <NavLink to="/profile">Profile</NavLink>{' '}
        {/*
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
          */}
        {token && (
          <button type="button" onClick={onLogout}>
            {' '}
            Log out
          </button>
        )}
      </nav>
    </>
  );
};

export default Layout;
