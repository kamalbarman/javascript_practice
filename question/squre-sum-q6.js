const arr=[2,3,4,5];

const squr = arr.map((el)=>{
   let squre = el * el;
 return squre;
})

let avg = squr.reduce((el,el2)=>{
    let sum = el+el2;
    return sum;
})

let avarege = avg/arr.length;

console.log(avarege);


