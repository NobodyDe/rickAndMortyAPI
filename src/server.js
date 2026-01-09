export async function rickApi(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const json = await response.json();

  // const charactes = json.results;

  return json.results;
}
