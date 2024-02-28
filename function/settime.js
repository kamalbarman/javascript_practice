// console.log("hello");
// setTimeout(()=>{
//     console.log("and i am  from bharat");
// },5000);
// console.log("i am kamal");

console.log("hello");
let id1=setInterval(()=>{
    console.log("and i am  from bharat");
},1000);
console.log("i am kamal");


let i2 =setInterval(()=>{
    console.log("from alu");
},2000);

clearInterval(id1); //clearinterval used to stop setinterval 
