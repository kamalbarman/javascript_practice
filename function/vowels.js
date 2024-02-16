const prompt = require("prompt-sync")({ sigint: true });

// let str = prompt("enter a string : ");
// let count=0;
// for (const value of str) {
//     if (value=="a"||value=="e"||value=="i"||value=="o"||value=="u") {
//         count++;
//     }
// }
// console.log(count);

let vowel=()=>{
    let str = prompt("enter a string : ");
let count=0;
for (const value of str) {
    if (value=="a"||value=="e"||value=="i"||value=="o"||value=="u") {
        count++;
    }
}
console.log(`there are ${count} vowel in the string`);

}
vowel();
