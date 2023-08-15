import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ searchPlants }) {
  const [plantName, setPlantName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    searchPlants(plantName);
  }
  function handleChange({ target: { value } }) {
    setPlantName(value);
  }
  return (
    <div className="sidebar">
      <form onSubmit={handleSubmit}>
        <h2>Search your plant</h2>
        <input
          onChange={handleChange}
          className="plant-key"
          placeholder="Plant name"
          value={plantName}
        ></input>
      </form>
    </div>
  );
}
