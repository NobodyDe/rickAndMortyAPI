import { rickApi } from "/src/server.js";
import { numberPages } from "./pages.js";

export const currentPage = document.querySelector(".current-page");

// async function charactersRecive(value) {
//   const data = await rickApi();
//   return data[0][value];
// }

// charactersRecive();

const container = document.querySelector(".container");

export function elementCreator(tag, attr, children = []) {
  const { text, ...props } = attr;

  const element = document.createElement(tag);

  Object.entries(props).forEach((item) => element.setAttribute(...item));

  if (text) element.innerText = text;

  if (children) element.append(...children);

  // children.forEach((child) => {
  //   element.appendChild(child);
  // });

  return element;
}

export async function renderCards(page, reset) {
  if (reset) {
    container.innerHTML = "";
  }
  const everyCharacter = await rickApi(page);
  // const onlyCharacter = everyCharacter.results;

  async function getEpisode(character) {
    const response = await fetch(character);
    const json = await response.json();

    return json.name;
  }

  for (const character of everyCharacter.results) {
    const infos = [
      ["label", "Ultimo local visto:"],
      ["value", character.location.name],
      ["label", "Primeira vez visto:"],
      ["value", await getEpisode(character.episode[0])],
    ].map(([className, text]) =>
      elementCreator("div", { class: `info-${className}`, text })
    );

    function statusClass(status) {
      const statusMap = {
        Alive: "bullet-point",
        Dead: "bullet-point-Dead",
        unknown: "bullet-point-unknown",
      };

      return statusMap[status] ?? "bullet-point-unknown";
    }

    const cardInfo = elementCreator("div", { class: "card-info" }, infos);

    const spanText = elementCreator(
      "span",
      { text: `${character.status} - ${character.species}` },
      []
    );

    const span = elementCreator(
      "span",
      { class: await statusClass(character.status) },
      []
    );

    const cardSubtitle = elementCreator("div", { class: "card-subtitle" }, [
      span,
      spanText,
    ]);

    const titleH2 = elementCreator(
      "h2",
      { class: "card-title", text: await character.name },
      []
    );

    const divCardContent = elementCreator("div", { class: "card-content" }, [
      titleH2,
      cardSubtitle,
      cardInfo,
    ]);

    const imgCard = elementCreator(
      "img",
      {
        src: await character.image,
        alt: "Imagem do Personagem",
        class: "card-image",
      },
      []
    );

    const divCard = elementCreator(
      "div",
      {
        class: "card",
      },
      [imgCard, divCardContent]
    );

    container.appendChild(divCard);
    console.log();
  }
  return everyCharacter.info.pages;
}

async function render() {
  const pages = await renderCards(currentPage.innerText);

  void numberPages(pages);
}

console.log(await renderCards());
render();
