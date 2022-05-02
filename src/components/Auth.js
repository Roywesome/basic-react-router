import React from 'react';

const Auth = ({ token, onLogin }) => {
  return (
    <div>
      <h1> Please authenticate to continue</h1>
      {!token && (
        <button type="button" onClick={onLogin}>
          Log In{' '}
        </button>
      )}
    </div>
  );
};

export default Auth;
