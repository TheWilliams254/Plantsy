import React, {useState}from "react";
import { API_URL } from "./PlantPage";
function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name, image, price };
    fetch(`${API_URL}/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    });
    setName("");
    setImage("");
    setPrice("");
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit} className="form">
        <input type="text" name="name" value={name} placeholder="Plant name" onChange={(e) => setName(e.target.value)}  />
        <input type="text" name="image" value={image}placeholder="Image URL" onChange= {(e) => setImage(e.target.value)}/>
        <input type="number" name="price" value={price} step="0.01" placeholder="Price" onChange={ (e) => setPrice(e.target.value) }/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
