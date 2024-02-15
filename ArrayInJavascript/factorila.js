// const prompt=require("prompt-sync")({sigint:true}); 


let n =prompt("enter num you want to factor : ");

let res = 1;

for(let i = res; i<=n; i++){
    
    res = res * i;
    console.log(res);
    console.log("your iteration",i);
    document.getElementById("demo").innerHTML=res;
}