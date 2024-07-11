
const prompt = require("prompt-sync")({ sigint: true });

let size = prompt("enter size : ");

if (size == "xl"){
    console.log("price is 250");
}
else if (size == "L"){
    console.log("price is 200");
}
else if (size == "M"){
    console.log("price is 100");
}
else if (size == "s"){
    console.log("price is 50");
}
else{
    console.log("invalid input");
}