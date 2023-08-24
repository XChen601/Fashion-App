import React, { useState } from "react";

import "../css/Wardrobe.css";

function Wardrobe() {
  const [clothes, setClothes] = useState([]);
  const [laundry, setLaundry] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setClothes((prevImages) => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(file);
    }
  };
  const moveToLaundry = (index) => {
    setLaundry((prevLaundry) => [...prevLaundry, clothes[index]]);
    setClothes((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const moveToClothings = (index) => {
    setClothes((prevImages) => [...prevImages, laundry[index]]);
    setLaundry((prevLaundry) => prevLaundry.filter((_, idx) => idx !== index));
  };

  const removeImage = (listSetter, list, index) => {
    listSetter(list.filter((_, idx) => idx !== index));
  };

  return (
    <div className="wardrobe-page">
      <section className="clothings">
        <h2>My Clothings</h2>
        <input type="file" id="image_input" onChange={handleImageChange} />
        <div className="clothing-list">
          <label for="image_input" className="clothing">
            Add Clothing
          </label>
          {clothes.map((imageSrc, index) => (
            <div class="clothing">
              <img key={index} src={imageSrc} alt={`Clothing ${index}`} />
              <div>
                <button onClick={() => moveToLaundry(index)}>Laundry</button>
                <button onClick={() => removeImage(setClothes, clothes, index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Laundry</h2>
        <div className="laundry-list">
          {laundry.map((imageSrc, index) => (
            <div className="clothing" key={index}>
              <img src={imageSrc} alt={`Laundry ${index}`} />
              <div>
                <button onClick={() => moveToClothings(index)}>Washed</button>
                <button onClick={() => removeImage(setLaundry, laundry, index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Wardrobe;
