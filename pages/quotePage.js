// import { getQuoteBySearch } from "../api/api.js";
// import { quotesCategory } from "../lib/data.js";
import { getRandomQuote } from "../api/api.js";

// export function showQuoteBySearch(textQuote) {
//   const searchForm = document.querySelector(".searchForm");
//   const spanElem = document.querySelector(".quoteAuthor");
//   searchForm.addEventListener("submit", handleSubmit);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const text = event.target.elements.searchText.value;
//     const data = await getQuoteBySearch(text);

//     textQuote.textContent = data[0].quote;
//     spanElem.textContent = data[0].author;
//   }
// }
export async function showRandomQuote() {
  // const pElem = document.querySelector(".textQuote");
  const data = await getRandomQuote();
  const pElem = document.querySelector(".textQuote");
  const spanElem = document.querySelector(".quoteAuthor");
  pElem.textContent = data.content;
  spanElem.textContent = data.author;
}

// export async function showQuoteByCategory(textQuote) {
//   const selectCategory = document.querySelector("#selectCategory");
//   for (const category of quotesCategory) {
//     const option = document.createElement("option");
//     option.classList.add("categoryOption");
//     selectCategory.append(option);

//     option.textContent = category;
//   }
//   selectCategory.addEventListener("change", async (event) => {
//     const data = await getQuoteByCategory(event.target.value);

//     textQuote.textContent = data[0].quote;
//   });
// }
