const ans = 77;
let i = 0;
let input = prompt("Enter a number to guess the right answer");
while (input !== ans) {
  if (input > ans) prompt("Guess too high, go lower :) ");
  else if (input < ans) prompt("Guess too low, go higher :) ");
  i++;
}
prompt(`Congratulations you guess the answer in ${i} tries`);
