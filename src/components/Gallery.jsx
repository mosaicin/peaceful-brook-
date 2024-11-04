import React from "react";

function Gallery() {
  return (
    <div className="gallery">
      <h1>Галерея</h1>
      <div className="gallery-content">
        <div className="gallery-item">
          <img src="path-to-image1.jpg" alt="Artwork 1" />
          <p>Description or title of Artwork 1</p>
        </div>
        <div className="gallery-item">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkG...2Q==" alt="Image" />
          <p>Description or title of Artwork 2</p>
        </div>
        <div className="gallery-item">
          <img src="path-to-image3.jpg" alt="Artwork 3" />
          <p>Description or title of Artwork 3</p>
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </div>
  );
}

export default Gallery;
