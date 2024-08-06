import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addImage } from '../../slices/imageSlice';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(addImage({ id: Date.now().toString(), src: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} className="form-control" />
    </div>
  );
};

export default ImageUploader;
