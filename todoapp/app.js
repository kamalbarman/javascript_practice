todo = [];
let req = prompt("please enter your request");
while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == "list") {
        console.log("--------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        
        console.log("------");
        document.getElementById("demo").innerHTML=todo;

    }else if (req == "add") {
        let task = prompt("please enter the task you want to you add");
        todo.push(task);
        console.log("task added");
        document.getElementById("demo").innerHTML=task;
}else if(req=="delete"){
    let idex=prompt("please enter the task index");
    todo.splice(idex,1);
    console.log("task deleted");
}else{
    console.log("wrong request");
}
req=prompt("please enter your request");
}