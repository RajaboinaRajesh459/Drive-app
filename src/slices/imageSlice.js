// src/slices/imageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [],
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
  },
});

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer;
