let todo = [];

let req = prompt("enter your request");
// console.log(req);

while (true) {
    if (req == "quit") {
        console.log("quiting the app");
        break;
    }
    if (req == "list") {
        console.log("-------");
     
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
      let alu = document.querySelector("#demo");
      alu.innerHTML="demo";
    
        console.log("--------");
    } else if (req == "add") {
        let task = prompt("enter your task");
        todo.push(task);
        console.log("task added");
    } else if (req == "delete") {
        let idx = prompt("enter the task you want to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else {
        console.log("wrong request");
    }
    req = prompt("enter your request");


}
