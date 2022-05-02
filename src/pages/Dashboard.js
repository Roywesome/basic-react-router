import React from 'react';

const Dashboard = ({ token }) => {
  return (
    <>
      <h1> Dashboard (Private)</h1>
      {token && <div> Authenticated as {token}</div>}
    </>
  );
};

export default Dashboard;
