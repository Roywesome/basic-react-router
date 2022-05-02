import React from 'react';
import Auth from '../components/Auth';

const Home = ({ token, onLogin }) => {
  return (
    <>
      <Auth token={token} onLogin={onLogin} />
    </>
  );
};

export default Home;
