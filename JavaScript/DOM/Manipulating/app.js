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

const allSpans = document.querySelector("span");
let i = 0;
for (let span of allSpans) {
  span.style.color = colors[0];
}
