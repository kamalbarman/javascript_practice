const prompt=require("prompt-sync")({sigint:true}); 

let n = prompt("enter your number : ");

let result=1;

for(let i=1; i<=n; i++){
  result=result*i;
}
console.log(result);

 

  