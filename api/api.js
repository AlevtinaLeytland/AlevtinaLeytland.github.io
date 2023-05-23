const key = "B5JEBha6yzCgoOIzMjpZjw==9n04eamCslV580fN";
const newsKey = "91436f93d637403d88e7a6eda1dcc7fa";

const quoteUrl = "https://api.quotable.io";

export async function getRandomQuote() {
  const data = await fetch(`${quoteUrl}/random`);
  return await data.json();
  // console.log(data.json());
}

// https://api.api-ninjas.com/v1/quotes?category=

// const baseUrl = "https://api.api-ninjas.com/v1/quotes";
const baseUrlNews = "https://newsapi.org/v2/";

// export async function getQuoteBySearch(text) {
//   try {
//     const data = await fetch(`${baseUrl}?category=${text}`, {
//       headers: { "X-Api-Key": key },
//     });
//     return await data.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function getQuoteByCategory(text) {
//   const data = await fetch(`${baseUrl}?category=${text}`, {
//     headers: { "X-Api-Key": key },
//   });

//   return await data.json();
// }

// export async function getNewsByCountry(country) {
//   const data = await fetch(`${baseUrlNews}top-headlines?country=${country}`, {
//     headers: { "X-Api-Key": newsKey },
//   });

//   return await data.json();
// }

export async function getNewsBySelect(country, category) {
  const data = await fetch(
    `${baseUrlNews}top-headlines?country=${country}&category=${category}`,

    {
      headers: { "X-Api-Key": newsKey },
    },
  );
  return await data.json();
}

export async function getNewsBySearch(text) {
  const data = await fetch(`${baseUrlNews}everything?q=${text}`, {
    headers: { "X-Api-Key": newsKey },
  });
  return await data.json();
}
