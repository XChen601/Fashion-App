import React, { useState, useEffect } from "react";

import "../css/Wardrobe.css";

function Wardrobe() {
  const [clothes, setClothes] = useState(
    JSON.parse(localStorage.getItem("clothes")) || []
  );
  const [laundry, setLaundry] = useState(
    JSON.parse(localStorage.getItem("laundry")) || []
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clothingName, setClothingName] = useState("");
  const [clothingCategory, setClothingCategory] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newClothing = {
          image: reader.result,
          name: clothingName,
          category: clothingCategory,
        };
        setClothes((prevClothes) => [...prevClothes, newClothing]);
        setClothingName("");
        setClothingCategory("");
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

  // Use useEffect to update localStorage whenever clothes or laundry state changes
  useEffect(() => {
    localStorage.setItem("clothes", JSON.stringify(clothes));
  }, [clothes]);

  useEffect(() => {
    localStorage.setItem("laundry", JSON.stringify(laundry));
  }, [laundry]);

  return (
    <div className="wardrobe-page">
      <UploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleImageChange}
        clothingName={clothingName}
        setClothingName={setClothingName}
        clothingCategory={clothingCategory}
        setClothingCategory={setClothingCategory}
      />
      <section className="clothings">
        <h2>My Clothings</h2>
        <div className="clothing-list">
          <button
            onClick={() => setIsModalOpen(true)}
            className="clothing add-btn"
          >
            Add New Clothing
          </button>
          {clothes.map((clothing, index) => (
            <div className="clothing" key={index}>
              <img src={clothing.image} alt={clothing.name} />
              <p>Name: {clothing.name}</p>
              <p>Category: {clothing.category}</p>
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
          {laundry.map((clothing, index) => (
            <div className="clothing" key={index}>
              <img src={clothing.image} alt={clothing.name} />
              <p>Name: {clothing.name}</p>
              <p>Category: {clothing.category}</p>
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

function UploadModal({
  isOpen,
  onClose,
  onUpload,
  clothingName,
  setClothingName,
  clothingCategory,
  setClothingCategory,
}) {
  return (
    isOpen && (
      <div className="clothing-modal">
        <div className="clothing-modal-content">
          <h2>Upload Clothing</h2>
          <input
            type="text"
            placeholder="Clothing Name"
            value={clothingName}
            onChange={(e) => setClothingName(e.target.value)}
            id="clothing-name"
          />

          <input
            type="text"
            placeholder="Category"
            value={clothingCategory}
            onChange={(e) => setClothingCategory(e.target.value)}
          />

          <input type="file" id="image_input" onChange={onUpload} />
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
}

export default Wardrobe;
