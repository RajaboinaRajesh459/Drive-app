// src/slices/folderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  folders: [],
};

const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    addFolder: (state, action) => {
      state.folders.push(action.payload);
    },
    addNestedFolder: (state, action) => {
      const { parentFolderId, newFolder } = action.payload;
      const parentFolder = state.folders.find(folder => folder.id === parentFolderId);
      if (parentFolder) {
        parentFolder.children.push(newFolder);
      }
    },
  },
});

export const { addFolder, addNestedFolder } = folderSlice.actions;
export default folderSlice.reducer;
