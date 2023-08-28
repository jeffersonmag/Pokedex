const pokemonList = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 5;
const maxRecords = 153;
let pokemonsDetailsList;
let offset = 0;

function convertPokemonToHtml(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}" onclick="pokemonsDetails(${
    pokemon.number
  })">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
          <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </li>
    `;
}

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToHtml).join("");
    pokemonsDetailsList = pokemons;
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton); // remove o botão more...
  } else {
    loadPokemonItems(offset, limit);
  }
});

function pokemonsDetails(numberPokemon) {
  const detailFilter = pokemonsDetailsList.filter(
    (item) => item.number == numberPokemon
  );
  localStorage.setItem("pokemon", JSON.stringify(detailFilter));
  window.open("./details.html");
}
