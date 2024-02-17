let arr = [2,4,6,8,7,5];

// let n = arr.filter((valu)=>{
//   return valu>3;  
// })
// console.log(arr);
// console.log(n);
const output=arr.reduce((prv,curr)=>{
return prv>curr? prv: curr;
})

console.log(output);