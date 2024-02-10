const prompt = require("prompt-sync")({ sigint: true });
let n=prompt("enter num how much time u want to run : ");
let i=1;
while ( i<=n) {
    console.log(i);
    i++;
}