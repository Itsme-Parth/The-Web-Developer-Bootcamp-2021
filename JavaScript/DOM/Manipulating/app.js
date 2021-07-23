const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

/* Manipulation Exercise */
let x = document.querySelector("span");
x.innerText = "Disgusting";

/* Manipulation Exercise 2 */
document.querySelector("img").src =
  "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg";
document.querySelector("img").alt = "chicken";

/* Changing styles using JavaScript */
document.getElementById("container").style.textAlign = "center";

document.querySelector("img").style.width = "150px";
document.querySelector("img").style.borderRadius = "50%";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let allSpans = document.querySelectorAll("span");
for (let i in colors) {
  allSpans[i].style.color = colors[i];
  console.log(i);
}

const liS = document.querySelectorAll("li");
for (let li of liS) {
  li.classList.toggle("highlight");
}

for (let i = 0; i < 100; i++) {
  const newButton = document.createElement("button");
  newButton.innerText = "Hey!";
  const container = document.querySelector("#container");
  container.appendChild(newButton);
}
