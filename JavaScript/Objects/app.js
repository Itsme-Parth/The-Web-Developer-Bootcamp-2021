/* We call these object literals because if you do typeOf [] Js gives out object */

const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
};

console.log(product["name"]);
console.log(product["flavors"]);
console.log(product.name);
console.log(product.flavors);

product.count = 100; //Adding in the object

console.log(product);

product.count = 90; //Updating values in the object

console.log(product);
