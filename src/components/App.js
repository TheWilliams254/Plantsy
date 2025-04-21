import React, { useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { API_URL } from "./PlantPage";
function App() {
  useEffect(() => {
    fetch(`${API_URL}/plants`, {
      method: "GET",
      cache: "no-store"
    }
    )
      .then((response) => response.json())
      .then((data) => {
        global.basePlants = data
        console.log(data)
      })
  })
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
