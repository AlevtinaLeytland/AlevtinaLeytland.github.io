import React from "react";
import "./Plant.css";
import dummyPic from "../../Assets/dummyPic.png";
import { useLocation, useNavigate } from "react-router-dom";

const Plant = ({ plant }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="plant-item">
      <div className="item-img">
        <h3 className="plant-name">{plant.common_name}</h3>
        {plant.default_image &&
        plant.default_image.thumbnail !==
          "https://perenual.com/storage/image/upgrade_access.jpg" ? (
          <img src={plant.default_image.thumbnail} alt="plant" />
        ) : (
          <img className="dummyPic" src={dummyPic} alt="plant" />
        )}
      </div>

      {location.state ? (
        <div className="item-description">
          {" "}
          <p>Type: {plant.type}</p>
          <p>Dimension: {plant.dimension}</p>
          <p>Drought tolerant:{plant.drought_tolerant ? "Yes" : "No"}</p>
          <p>Pruning month: {plant.pruning_month.join(", ")}</p>
          <p>Sunlight: {plant.sunlight}</p>
          <p>Watering: {plant.watering}</p>
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
