import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Landing;