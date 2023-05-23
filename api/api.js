const newsKey = "91436f93d637403d88e7a6eda1dcc7fa";

const quoteUrl = "https://api.quotable.io";

export async function getRandomQuote() {
  const data = await fetch(`${quoteUrl}/random`);
  return await data.json();
}
const baseUrlNews = "https://newsapi.org/v2/";

export async function getNewsBySelect(country, category) {
  const data = await fetch(
    `${baseUrlNews}top-headlines?country=${country}&category=${category}`,

    {
      method: "GET",
      mode: "no-cors",
      headers: {
        "X-Api-Key": newsKey,
        "Content-Type": "application/json",
      },
    },
  );
  return await JSON.parse(data);
}

export async function getNewsBySearch(text) {
  const data = await fetch(`${baseUrlNews}everything?q=${text}`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "X-Api-Key": newsKey,
      "Content-Type": "application/json",
    },
  });
  return await JSON.parse(data);
}
