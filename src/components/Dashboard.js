import React from 'react';
import FolderList from './Folder/FolderList';
import ImageUploader from './Folder/ImageUploader';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Folders</h2>
          <FolderList />
        </div>
        <div className="col-md-6">
          <h2>Upload Image</h2>
          <ImageUploader />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
