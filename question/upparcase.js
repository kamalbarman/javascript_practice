// let strings=["adam","bob","catlyn","donald","eve"];

// let upa = strings.map((up)=>{
//  let uppar = up.toUpperCase();
//  return uppar;
// })

// console.log(upa);








// Write a function called double And Return Args which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled

const doubleAndReturnArgs=(arr,...args)=>[...arr,...args.map((v)=>v*2),];
doubleAndReturnArgs([1,2,3],4,4); doubleAndReturnArgs([2],10,4); // [2,20,8]



// [1,2,3,8,8]