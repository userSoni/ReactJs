import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <p>
      Page Not found. Go to <Link to="/">Home</Link>
    </p>
  );
};

export default NotFound;