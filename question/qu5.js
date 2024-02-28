let arr =[100,44,56,43,49];
// let array = arr.every(()=>{
//     let ans;
//     if(ans%10==0){
//         return true;
//     }
// })
// console.log(array);
let minimum= arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
})

console.log(minimum);

