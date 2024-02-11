const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("enter your number : ");

for (let i = 0; i <=n; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}