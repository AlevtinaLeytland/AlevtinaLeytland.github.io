const newsKey = "V22WNCFJ9uBUYoAogP8L112wDfKMExF8zZaAvXxPucE";

const quoteUrl = "https://api.quotable.io";

export async function getRandomQuote() {
  const data = await fetch(`${quoteUrl}/random`);
  return await data.json();
}
const baseUrlNews = `https://api.newscatcherapi.com/v2/`;

export async function getNewsBySelect(keywords = "Tesla", country, category) {
  const data = await fetch(
    `${baseUrlNews}search?q=${keywords}&countries=${country}&topic=${category}`,
    {
      headers: {
        "x-api-key": newsKey,
      },
    },
  );
  return await data.json();
}

export async function getNewsBySearch(text) {
  const data = await fetch(`${baseUrlNews}search?q=${text}`, {
    headers: {
      "x-api-key": newsKey,
    },
  });
  return await data.json();
}
