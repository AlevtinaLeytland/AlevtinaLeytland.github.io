const newsKey = "91436f93d637403d88e7a6eda1dcc7fa";
const quoteUrl = "https://api.quotable.io";
const baseUrlNews = "https://newsapi.org/v2/";

//get random Quote function in sidebar
export async function getRandomQuote() {
  const data = await fetch(`${quoteUrl}/random`);
  return await data.json();
}
//get news by selecting country or category
export async function getNewsBySelect(country, category) {
  const data = await fetch(
    `${baseUrlNews}top-headlines?country=${country}&category=${category}`,

    {
      headers: { "X-Api-Key": newsKey },
    },
  );
  return await data.json();
}
//get news by keyword
export async function getNewsBySearch(text) {
  const data = await fetch(`${baseUrlNews}everything?q=${text}`, {
    headers: { "X-Api-Key": newsKey },
  });
  return await data.json();
}
