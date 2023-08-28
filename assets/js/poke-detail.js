let pokemon = JSON.parse(localStorage.getItem("pokemon"));
let pokemonType = pokemon[0].type;

let PokemonDetailHtml = document.getElementById("pok-detail");

PokemonDetailHtml.innerHTML += 
`<div class="${pokemonType}" style="padding:1rem">
<h2 id="numberPokemon"> ID: #${pokemon[0].number}</h2>
<p>Name: ${pokemon[0].name}</p>
<img src="${pokemon[0].photo}" alt="${pokemon[0].name}">
<p>Weight: ${pokemon[0].weight} </p>
<p>Height: ${pokemon[0].height} </p>
</div>`;
