import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Plant from "../../components/Plant/Plant";
import { findPlant } from "../../api/api";

export const SinglePlantPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getPlant = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await findPlant(id);
        setPlant(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPlant();
  }, [id]);

  return (
    <div>
      {plant && <Plant plant={plant} />}
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
};
