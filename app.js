"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS works");
  const pokemons = await getPokemon();
  pokemons.forEach(addPokemon);
}

async function getPokemon() {
  const response = await fetch(`https://cederdorff.github.io/dat-js/05-data/pokemons.json`);
  const data = await response.json();
  return data;
}

function addPokemon(pokemon) {
  const list = document.querySelector("#pokemon");
  list.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
        <article class="grid-item">
        <img src="${pokemon.image}">
        <h2>${pokemon.name}</h2>
        <p>${pokemon.type}</p>
        <p>${pokemon.height}</p>
        <p>${pokemon.weight}</p>
        </article>
        `
  );

  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log(pokemon);
    document.querySelector("#dialog-name").textContent = `${pokemon.name}`;
    document.querySelector("#dialog-img").src = pokemon.image;
    document.querySelector("#dialog-description").textContent = `${pokemon.description}`;
    document.querySelector("#dialog-ability").textContent = `Abilities: ${pokemon.ability}`;
    document.querySelector("#dialog-type").textContent = `Type: c${pokemon.type}`;
    document.querySelector("#dialog-subtype").textContent = `Sub type: ${pokemon.subtype}`;
    document.querySelector("#dialog-weaknesses").textContent = `Weaknesses: ${pokemon.weaknesses}`;
    document.querySelector("#dialog-gender").textContent = `Gender: ${pokemon.gender}`;
    document.querySelector("#dialog-weight").textContent = `Weight: ${pokemon.weight}`;
    document.querySelector("#dialog-height").textContent = `Height: ${pokemon.height}`;
    document.querySelector("#dialog-generation").textContent = `Generation: ${pokemon.generation}`;
    document.querySelector("#dialog-statsHP").textContent = `HP: ${pokemon.statsHP}`;
    document.querySelector("#dialog-statsAttack").textContent = `Attack: ${pokemon.statsAttack}`;
    document.querySelector("#dialog-statsDefence").textContent = `Defence: ${pokemon.statsDefence}`;
    document.querySelector("#dialog-statsSpecialAttack").textContent = `Special Attack: ${pokemon.statsSpecialAttack}`;
    document.querySelector("#dialog-statsSpecialDefence").textContent = `Special Defence: ${pokemon.statsSpecialDefence}`;
    document.querySelector("#dialog-statsSpeed").textContent = `Speed: ${pokemon.statsspeed}`;
    document.querySelector("#dialog-pokemon").showModal();
  }
}
