import { elementCreator, renderCards } from "./main.js";

const listPages = document.querySelector(".list-pages");
const pageNumber = document.querySelector(".page-number");
const currentPage = document.querySelector(".current-page");
let pages = 42;

export function numberPages() {
  for (let i = 1; i <= pages; i++) {
    const pageElement = elementCreator(
      "button",
      { class: "page-number", href: "#", text: i },
      []
    );

    pageElement.addEventListener("click", (e) => {
      const numberPage = pageElement.textContent;
      renderCards(numberPage, true);
      currentPage.innerText = numberPage;
    });

    listPages.append(pageElement);
  }
}
