import {
  renderNewsBySelect,
  searchByKey,
  showDefaultNews,
} from "./newsPage.js";
import { showRandomQuote } from "./quotePage.js";
// const textQuote = document.querySelector(".textQuote");
const newsList = document.querySelector(".newsList");
window.addEventListener("load", () => {
  //   showQuoteBySearch(textQuote);
  //   showQuoteByCategory(textQuote);
  showRandomQuote();
  searchByKey(newsList);
  renderNewsBySelect(newsList);
  showDefaultNews(newsList);
});
