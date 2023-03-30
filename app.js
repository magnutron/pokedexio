"use strict";
window.addEventListener("load", initApp);
///////////////////////////
/// Set JSON URL here ////
/////////////////////////
const dburl = "https://cederdorff.github.io/dat-js/05-data/pokemons.json";

////////////////////////
/// Initialize App  ///
//////////////////////
async function initApp() {
  console.log("JS works");
  const pokemons = await getPokemon(dburl);

  /////===--- THIS ALSO WORKS, BUT RACE SAYS FOROF IS BETTER FOR THIS ¯\_(ツ)
  // pokemons.forEach(addPokemon);

  /////===--- THIS ALSO WORKS, BUT IT TOO COMPLEX COMPARED TO NEXT ONE?
  // for (let index = 0; index < pokemons.length; index++) {
  //   const pokemon = pokemons[index];
  //   addPokemon(pokemon);
  // }

  for (const pokemon of pokemons) {
    addPokemon(pokemon);
  }
}

//////////////////////////////
/// Fetch and parse JSON  ///
////////////////////////////
async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

////////////////////////////////////////////////
/// Create HTML grid items from parsed data ///
//////////////////////////////////////////////
function addPokemon(pokemon) {
  const list = document.querySelector("#pokemon");
  let typeColor = pokemon.type.split(",")[0].trim().toLowerCase();

  if (pokemon.type.includes("/")) {
    typeColor = pokemon.type.split("/")[0].trim().toLowerCase();
    console.log(typeColor);
  }

  list.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
        <article class="grid-item">
        <div class="${typeColor}">
        <img src="${pokemon.image}">
        <h2>${pokemon.name}</h2>
        <p>${pokemon.type}</p>
        </div>
        </article>
        `
  );

console.log(typeColor)



  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

  ///////////////////////////////////////////////////////////////////////////////////
  /// Modify and show textcontent for dialog modal when clicked, based on object ///
  /////////////////////////////////////////////////////////////////////////////////
  function pokemonClicked() {
    console.log(pokemon);
    document.querySelector("#dialog-name").textContent = `${pokemon.name}`;
    document.querySelector("#dialog-img").src = pokemon.image;
    document.querySelector("#dialog-description").textContent = `${pokemon.description}`;
    document.querySelector("#dialog-ability").textContent = `Abilities: ${pokemon.ability}`;
    document.querySelector("#dialog-type").textContent = `Type: ${pokemon.type}`;
    document.querySelector("#dialog-subtype").textContent = `Sub type: ${pokemon.subtype}`;
    document.querySelector("#dialog-weaknesses").textContent = `Weaknesses: ${pokemon.weaknesses}`;
    document.querySelector("#dialog-gender").textContent = `Gender: ${pokemon.gender}`;
    document.querySelector("#dialog-weight").textContent = `Weight: ${pokemon.weight}`;
    document.querySelector("#dialog-height").textContent = `Height: ${pokemon.height}`;
    document.querySelector("#dialog-dexindex").textContent = `Index Number: ${pokemon.dexindex}`;
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
