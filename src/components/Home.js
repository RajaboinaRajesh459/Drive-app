// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Folder App</h1>
      <p>
        This application allows you to create nested folders, upload images, and search for images.
      </p>
      <div>
        <Link to="/register" className="btn btn-primary m-2">Register</Link>
        <Link to="/login" className="btn btn-secondary m-2">Login</Link>
      </div>
    </div>
  );
};

export default Home;
