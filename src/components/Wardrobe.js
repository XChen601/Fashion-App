import React, { useState } from "react";

import "../css/Wardrobe.css";

function Outfits() {
  const [images, setImages] = React.useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="clothings">
        <h2>My Clothings</h2>
        <input type="file" id="image_input" onChange={handleImageChange} />
        <label for="image_input">Add Clothing</label>
        <div className="clothing-list">
          {images.map((imageSrc, index) => (
            <div class="clothing">
              <img key={index} src={imageSrc} alt={`Clothing ${index}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Outfits;
