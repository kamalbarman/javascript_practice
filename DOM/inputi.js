let input = document.querySelector('#text');
let h2 = document.querySelector('p');


input.addEventListener('input',function(event){
    event.preventDefault();
    console.log(input.value);
    h2.innerHTML=input.value;
});