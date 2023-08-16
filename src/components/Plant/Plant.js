import React from "react";
import "./Plant.css";
import { useLocation, useNavigate } from "react-router-dom";

const Plant = ({ plant }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="plant-item">
      <div className="item-img">
        <h3>{plant.common_name}</h3>
        <img src={plant.default_image?.thumbnail} alt="plant" />
      </div>

      {location.state ? (
        <div className="item-description">
          {" "}
          <p>Type: {plant.type}</p>
          <p>{plant.dimension}</p>
          <p>Origin: {plant.origin.join(", ")}</p>
          <p>Description: {plant.description}</p>
        </div>
      ) : (
        <div className="plant-btn">
          {" "}
          <button onClick={() => navigate(`${plant.id}`, { state: true })}>
            Learn more
          </button>
        </div>
      )}
    </div>
  );
};

export default Plant;
