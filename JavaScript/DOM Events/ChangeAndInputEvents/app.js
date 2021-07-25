const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// }) // works only when you change the input and press away from the field

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});

/* Exercise */
let header = document.querySelector("h1");
let input = document.querySelector("input");

input.addEventListener("input", () => {
  header.innerHTML = `Welcome, ${input.value}`;
  if (input.value === "") {
    header.innerHTML = "Enter Your Username";
  }
});
