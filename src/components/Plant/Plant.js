import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Plant = ({ plant }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <h1>{plant.common_name}</h1>
      <img src={plant.default_image?.thumbnail} alt="plant" />
      {location.state ? (
        <div>
          <p>{plant.type}</p>
          <p>{plant.dimension}</p>
        </div>
      ) : (
        <button onClick={() => navigate(`${plant.id}`, { state: true })}>
          Learn more
        </button>
      )}
    </div>
  );
};

export default Plant;
