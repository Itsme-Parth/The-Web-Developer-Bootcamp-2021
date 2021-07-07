/* Concatenation method for arrays */

let cat = ["cat1", "cat2", "cat3"];

let dog = ["Dog1", "Dog2", "Dog3"];

// let catDogs = cat.concat(dog);

let catDogs = dog.concat(cat);
for (i = 0; i < catDogs.length; i++) {
  console.log(catDogs[i]);
}
/* 
includes() method to check if the array has that element or not 
return true if found otherwise false 
*/
catDogs.includes("cat1");

/* 
indexOf() method returns the index of that element in the array 
otherwise returns -1 if element not found
*/
catDogs.indexOf("cat");

/* reverse() method reverses the array inplace */
catDogs.reverse();
for (i = 0; i < catDogs.length; i++) {
  console.log(catDogs[i]);
}
