
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const [query, setQuery] = useState('');
  const images = useSelector((state) => state.images.images);

  const filteredImages = images.filter((image) =>
    image.src.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search Images</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images..."
        className="form-control mb-4"
      />
      <div className="row">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div key={image.id} className="col-md-4 mb-3">
              <img src={image.src} alt="" className="img-fluid" />
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
