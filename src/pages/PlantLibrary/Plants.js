import React, { useEffect, useState } from "react";
import "./Plants.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Plant from "../../components/Plant/Plant";
import { findPlants } from "../../api/api";

export default function Plants() {
  const [plants, setPlants] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getPlants = async () => {
      try {
        setLoading(true);
        setError("");
        const { data } = await findPlants(query);
        setPlants(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPlants();
  }, [query]);
  function searchPlants(query) {
    setQuery(query);
  }
  const result = [1, 2, 3, 4].map((el) => {
    console.log(el);
  });
  return (
    <div className="plants-container">
      <Sidebar searchPlants={searchPlants} />
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      <div className="all-plants">
        {plants &&
          (plants.length > 0 ? (
            plants.map((plant) => {
              return <Plant plant={plant} />;
            })
          ) : (
            <h1>Plant doesn't exist</h1>
          ))}
      </div>
    </div>
  );
}
