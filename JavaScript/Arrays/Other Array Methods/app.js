/* Concatenation method for arrays */

let cat = ["cat1", "cat2", "cat3"];

let dog = ["Dog1", "Dog2", "Dog3"];

// let catDogs = cat.concat(dog);

let catDogs = dog.concat(cat);

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

/* 
slice() method allows you select a certain segment of the array
includes the start index but not the end index
if you want to choose from the back type slice(-ve)
slice operation doesn't change the main array   
*/

let slicedCatDogs = catDogs.slice(2, 5);

/*
The splice() method changes the contents of an array by 
removing or replacing existing elements and/or adding new elements in place
*/

catDogs.splice(3, 3); //Deleting all the dogs
catDogs.splice(1, 0, "cat-mid");

for (i = 0; i < catDogs.length; i++) {
  console.log(catDogs[i]);
}

/*
The sort() method sorts the elements of an array in place and returns the sorted array.
*/
