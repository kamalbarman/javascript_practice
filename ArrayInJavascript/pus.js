let arr = [4,8,9,6,1,3,7,5];
 console.log(arr);

for(let i = 0; i <arr.length; i++)
{
    console.log(arr[i]);
}
arr.push(15,45);
console.log(arr);

console.log(`before slice ${arr}`);
arr.splice(4);
console.log(arr);  

