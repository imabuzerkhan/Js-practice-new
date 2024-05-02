let todo = [];

while (true) {
  let req = prompt("Please enter your request");

  if (req == "quit") {
    console.log("You quit now!");
    break;
  }

  if (req == "list") {
    console.log("---------------");
    for (task of todo) {
      console.log(task);
    }
  } else if (req == "add") {
    let task = prompt("Enter what you want to add to the todo list:");
    todo.push(task);
    console.log("Task added to todo list.");
  } else if (req == "del") {
    let index = prompt("Please enter the task index to delete:");
    todo.splice(index, 1);
    console.log("Task deleted from todo list.");
  } 
  req = prompt("Please enter your request");
}
