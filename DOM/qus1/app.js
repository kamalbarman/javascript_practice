let button = document.createElement("button");
let input = document.createElement("input");

button.innerHTML= "click me";

document.querySelector("body").append(button);
document.querySelector("body").append(input);

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn = document.querySelector("#btn");

btn.classList.add('btnStyle');


let h1 = document.createElement('h1');
h1.innerHTML="<u>dom practice</u>";
document.querySelector("body").append(h1);

h1.classList.add("purple");


let para= document.createElement('p');
para.innerHTML="Apna college <b>delta</b> practice";

document.querySelector("body").append(para);

// para.classList.add("bala");
