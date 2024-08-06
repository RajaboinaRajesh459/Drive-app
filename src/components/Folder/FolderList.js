import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFolder, addNestedFolder } from '../../slices/folderSlice';

const FolderList = () => {
  const [folderName, setFolderName] = useState('');
  const [parentFolderId, setParentFolderId] = useState('');
  const folders = useSelector((state) => state.folders.folders);
  const dispatch = useDispatch();

  const handleAddFolder = () => {
    const newFolder = { id: Date.now().toString(), name: folderName, children: [] };
    if (parentFolderId) {
      dispatch(addNestedFolder({ parentFolderId, newFolder }));
    } else {
      dispatch(addFolder(newFolder));
    }
    setFolderName('');
    setParentFolderId('');
  };

  return (
    <div>
      <input
        type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Folder Name"
        className="form-control mb-2"
      />
      <input
        type="text"
        value={parentFolderId}
        onChange={(e) => setParentFolderId(e.target.value)}
        placeholder="Parent Folder ID (optional)"
        className="form-control mb-2"
      />
      <button onClick={handleAddFolder} className="btn btn-primary">Add Folder</button>
      <ul className="list-group mt-3">
        {folders.map((folder) => (
          <li key={folder.id} className="list-group-item">
            {folder.name}
            {folder.children.length > 0 && (
              <ul className="list-group mt-2">
                {folder.children.map((child) => (
                  <li key={child.id} className="list-group-item">
                    {child.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
