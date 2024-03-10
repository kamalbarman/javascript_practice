// let smallImg=document.getElementsByClassName("oldImg");
// for(let i = 0; i<smallImg.length; i++){
//     console.dir(smallImg[i]);
//     smallImg[0].src="assets/spiderman_img.png";
//     console.log(i);
// }

// let alu=document.querySelector('h1');
// alu.style.color= 'red';
// alu.style.backgroundColor= 'blue';



// let lu=document.querySelectorAll('.box a');
// console.log(lu);
// for(let i =0; i<lu.length; i++){
//     lu[i].style.color='yellow';
// }


// create a paragraph using javascript only

// q1.

let para = document.createElement('p');
para.innerHTML="hello i am red!";
document.querySelector('body').append(para);

para.classList.add('red');

// q2.

let bu= document.createElement('h3');
bu.innerHTML="hello i am blue";
document.querySelector('body').append(bu);

bu.classList.add('blue');


let diva = document.createElement('div');
let h1 = document.createElement('h1');
let p1 = document.createElement('p');
document.querySelector('body').prepend(diva);

h1.innerHTML="i am in a div";
p1.innerHTML="me too";

diva.append(h1);
diva.append(p1);
diva.classList.add('box');



