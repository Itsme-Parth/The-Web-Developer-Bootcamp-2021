// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div"); //Create a div pokemon
  pokemon.classList.add("pokemon"); //Add class pokemon to div pokemon
  const label = document.createElement("span"); //Create a span
  label.innerText = `#${i}`; //Add numbers
  const newImg = document.createElement("img"); //Create an image
  newImg.src = `${baseURL}${i}.png`; //Add src to image

  pokemon.appendChild(newImg); //add image to the pokemon div
  pokemon.appendChild(label); //Add span to the pokemon div
  container.appendChild(pokemon); //Add pokemon div to the whole container
}
