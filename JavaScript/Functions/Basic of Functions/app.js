/* Coding exercise - 1 */
function printHeart() {
  console.log("<3");
}
printHeart();

/* Coding exercise - 2 */
function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}

/* Coding exercise - 3 */
function isSnakeEyes(die1, die2) {
  if (die1 === 1 && die2 === 1) {
    console.log("Snake Eyes!");
  } else console.log("Not Snake Eyes!");
}

/* Coding exercise - 4 */
function multiply(num1, num2) {
  return num1 * num2;
}

/* Coding exercise - 5 */
function isShortsWeather(temperature) {
  if (temperature >= 75) return true;
  return false;
}

/* Coding exercise - 6 */
function lastElement(arr) {
  if (arr.length === 0) return null;
  else return arr[arr.length - 1];
}

/* Coding exercise - 7 */
function capitalize(str) {
  let result = str[0].toUpperCase();
  let temp = str.slice(0, 1);
  result += temp;
  return result;
}

/* Coding exercise - 8 */
function sumArray(arr) {
  let sum = 0;
  for (let itr of arr) sum += itr;
  return sum;
}

/* Coding exercise - 9 */
let weekdays = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "sunday",
};
function returnDay(dayNum) {
  if (dayNum >= 1 && dayNum <= 7) {
    return weekdays.dayNum;
  } else return null;
}
