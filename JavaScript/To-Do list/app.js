let input = prompt("Choose your option :) ");
let todoList = [];
while (input !== "quit") {
  if (input === "new") {
    let item = prompt("Enter your item!");
    todoList.push(item);
    console.log("New item has been added :)");
  } else if (input === "list") {
    for (let itr of todoList) {
      console.log(itr);
    }
  } else if (input === "delete") {
    let deleteItem = prompt("Enter the item you would want to delete");
    todoList.splice(deleteItem - 1, 1);
  }
  input = prompt("Choose your option :) ");
}
console.log("You Quit the Todo App!");
