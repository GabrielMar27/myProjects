//fetch url

const url = "https://pokeapi.co/api/v2/pokemon/";

// helpful fucntions
let pokeId = document.querySelector("#pokeId");
let pokeSprite = document.querySelector("#pokeSprite");
let pokeIdImp = document.querySelector("#pokeIdImp");
let pokeName = document.querySelector("#pokeName");
let pokeHP = document.querySelector("#pokeHP");
let pokeGenData = document.querySelector("#generalData");
let cardContainerBorder = document.querySelector("#cardContainerBorder");
let cardContainer = document.querySelector("#cardContainer");
let pokeAttacks = document.querySelector("#pokeAttacks");
let pokeAttacks2 = document.querySelector("#pokeAttacks2");
let body = document.querySelector("body");
const img = document.createElement("img");
cardContainerBorder.style.visibility = "hidden";
//card style
pokeGenData.style.width = "150px";
pokeGenData.style.backgroundColor = "white";
pokeGenData.style.color = "black";
pokeGenData.style.borderRadius = "20px";
pokeSprite.style.border = "10px solid white";
pokeSprite.style.borderRadius = "10px";
// getting the output
async function getPokemon() {
  let pokeIdVal = pokeId.value;
  cardContainerBorder.style.visibility = "visible";
  //printing the img
  img.width = 200;
  img.height = 200;
  img.alt = "poke img here";
  pokeSprite.append(img);
  //getting the data from server
  let reponse = await fetch(url + pokeIdVal);
  let pokemon = await reponse.json();
  img.src = pokemon.sprites.front_default;
  //printing the poke name and hp
  pokeName.innerHTML = pokemon.species.name.toUpperCase();
  pokeHP.innerHTML = pokemon.stats[0].base_stat + pokemon.stats[0].stat.name;
  //printing the general data
  pokeGenData.innerHTML =
    pokemon.types[0].type.name +
    " " +
    pokemon.height +
    '"' +
    " " +
    pokemon.weight +
    " " +
    "LBS";
  //printing the attack
  pokeAttacks.innerHTML = pokemon.moves[0].move.name;
  pokeAttacks2.innerHTML = pokemon.moves[1].move.name;
  // chosing card background
  switch (pokemon.types[0].type.name) {
    case "grass":
      cardContainer.style.backgroundColor = "yellowgreen";
      body.style.color = "black";
      break;
    case "fire":
      cardContainer.style.backgroundColor = "red";
      body.style.color = "black";
      break;
    case "water":
      cardContainer.style.backgroundColor = "rgb(40, 128, 230)";
      body.style.color = "black";
      break;
    case "electric":
      cardContainer.style.backgroundColor = "yellow";
      body.style.color = "black";
      break;
    case "ice":
      cardContainer.style.backgroundColor = "rgb(125, 175, 231)";
      body.style.color = "black";
      break;
    case "fighting":
      cardContainer.style.backgroundColor = "rgb(122, 0, 0)";
      body.style.color = "white";
      break;
    case "poison":
      cardContainer.style.backgroundColor = "purple";
      body.style.color = "white";
      break;
    case "ground":
      cardContainer.style.backgroundColor = "rgb(170, 145, 2)";
      body.style.color = "black";
      break;
    case "flying":
      cardContainer.style.backgroundColor = "rgb(165, 93, 165)";
      body.style.color = "black";
      break;
    case "psychic":
      cardContainer.style.backgroundColor = "rgb(226, 95, 116)";
      body.style.color = "black";
      break;
    case "bug":
      cardContainer.style.backgroundColor = "rgb(83, 112, 30)";
      body.style.color = "white";
      break;
    case "rock":
      cardContainer.style.backgroundColor = "rgb(143, 114, 34)";
      body.style.color = "white";
      break;
    case "ghost":
      cardContainer.style.backgroundColor = "rgb(63, 2, 63)";
      body.style.color = "white";
      break;
    case "dark":
      cardContainer.style.backgroundColor = "black";
      body.style.color = "white";
      break;
    case "dragon":
      cardContainer.style.backgroundColor = "rgb(143, 80, 143)";
      body.style.color = "black";
      break;
    case "steel":
      cardContainer.style.backgroundColor = "grey";
      body.style.color = "black";
      break;
    case "fairy":
      cardContainer.style.backgroundColor = "pink";
      body.style.color = "black";
      break;
    case "normal":
      cardContainer.style.backgroundColor = "rgb(129, 121, 105)";
      body.style.color = "white";
      break;
  }
}

// const img = document.createElement("img");
// img.width = 200;
// img.height = 200;
// img.alt = "poke img here";
// pokeSprite.appendChild(img);
// let reponse = await fetch(url + pokeIdVal);
// let pokemon = await reponse.json();
// img.src = pokemon.sprites.front_defaul;
