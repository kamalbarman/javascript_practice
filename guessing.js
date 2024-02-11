const prompt = require("prompt-sync")({ sigint: true });

let guesnumber=29;

let n = prompt("enter the correct number : ");

if (guesnumber == n) {
    console.log("you win the game ");
}else{
    console.log("better luck for next time ");
}

// while(n!=guesnumber){
//      n = prompt("enter the correct number : ");

// }
// console.log("you win the game");