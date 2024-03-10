let para = document.querySelector('p');
    
para.addEventListener("click",function(){
    console.log("hello i am para");
});

let baksa = document.querySelector('.box');
baksa.addEventListener('mouseenter',function(){
    console.log("mouse under the baksa territory");
});

let h11= document.querySelector('h1');
let btn = document.querySelector('button');
let h33 = document.querySelector('h3');


function backColor(){
    console.log(this.innerText);
    this.style.backgroundColor="red";
}

h11.addEventListener("click",backColor);
h33.addEventListener("click",backColor);
btn.addEventListener("click",backColor);