<div align="center">
  <img src="public/Rick_and_Morty.svg" alt="Rick and Morty Logo" width="300" />
  <h1>Rick and Morty Character Explorer</h1>

  <p>
    <strong>Uma aplicação web interativa para explorar o multiverso de Rick and Morty.</strong>
  </p>

  <p>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    </a>
  </p>
</div>

<br />

## 📋 Sobre o Projeto

Este projeto é uma aplicação _Single Page Application_ (SPA) desenvolvida para consumir a famosa **API do Rick and Morty**. O objetivo principal é fornecer uma interface limpa, responsiva e performática para listar e detalhar os personagens da série.

A aplicação foi construída com foco em **JavaScript Moderno (ES6+)**, utilizando conceitos avançados de manipulação do DOM e consumo de APIs assíncronas.

## ✨ Funcionalidades

- **Listagem de Personagens**: Exibe cards detalhados de todos os personagens.
- **Paginação Dinâmica**: Navegue por todas as páginas de personagens disponíveis na API.
- **Status em Tempo Real**: Indicadores visuais (cores) para o status do personagem (Vivo, Morto, Desconhecido).
- **Dados Detalhados**:
  - Nome, espécie e status.
  - Última localização conhecida.
  - Primeiro episódio em que apareceu (requisição assíncrona adicional).
- **Design Responsivo**: Adaptável a dispositivos móveis e desktops.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as melhores práticas do mercado:

- **[Vite](https://vitejs.dev/)**: Ferramenta de build de próxima geração para um desenvolvimento extremamente rápido.
- **JavaScript (Vanilla)**: Lógica pura sem dependência de frameworks pesados, focando em performance.
- **Fetch API**: Consumo de dados assíncronos (`async/await`) para buscar informações da [Rick and Morty API](https://rickandmortyapi.com/).
- **HTML5 & CSS3**: Estruturação semântica e estilização moderna.
- **PNPM**: Gerenciador de pacotes rápido e eficiente.

## 📦 Instalação e Uso

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos

1.  **Clone o repositório**

    ```bash
    git clone https://github.com/seu-usuario/rickandmortyapi.git
    cd rickandmortyapi
    ```

2.  **Instale as dependências**

    ```bash
    pnpm install
    # ou
    npm install
    ```

3.  **Execute o servidor de desenvolvimento**

    ```bash
    pnpm dev
    # ou
    npm run dev
    ```

4.  **Acesse no navegador** O projeto estará rodando em `http://localhost:5173` (ou a porta indicada no terminal).

## 🧠 Destaques de Código

O projeto implementa uma função robusta para criação dinâmica de elementos DOM:

```javascript
export function elementCreator(tag, attr, children = []) {
  const { text, ...props } = attr;
  const element = document.createElement(tag);

  Object.entries(props).forEach((item) => element.setAttribute(...item));
  if (text) element.innerText = text;
  if (children) element.append(...children);

  return element;
}
```

Além disso, utiliza `async/await` para coordenar múltiplas requisições (personagem e seus episódios) de forma eficiente.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## 📄 Licença

Este projeto está sob a licença MIT.

---

<div align="center">
  Desenvolvido com 💜 por Nobody
</div>
