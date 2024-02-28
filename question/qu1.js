// Write a JavaScript function that returns array elements larger than a number

let arr = [7,8,9,5,6,4,2,3,1,52,12,47,96];

let num=5;

function arrnum(arr,num) {
   for(let i = 0; i<arr.length; i++){
    if (arr[i]>num) {
        console.log(arr[i]);
    }
   } 
}

arrnum(arr,num);