const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("enter a number : ");
let arr=[];
for(let i =1; i <= n; i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(`the sum of the array is ${sum}`);



let mul=arr.reduce((first,scnd)=>{
    return first*scnd;
})
console.log(`the muli of the array is ${mul}`);
