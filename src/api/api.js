const BASE_URL = "https://perenual.com";
const KEY = "sk-A1Gx64d7735ac71d51755";

console.log(BASE_URL);
export const findPlants = async (query) => {
  const url = query
    ? `${BASE_URL}/api/species-list?page=1&key=${KEY}&q=${query}`
    : `${BASE_URL}/api/species-list?page=1&key=${KEY}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const findPlant = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/species/details/${id}?key=${KEY}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );
    console.log(response);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
