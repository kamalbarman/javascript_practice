const prompt = require("prompt-sync")({ sigint: true });

let name = prompt("enter your name : ");

let output=`@${name}${name.length}`
console.log(output);