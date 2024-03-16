let form = document.querySelector('form');

form.addEventListener("change",function(event){
    event.preventDefault();

   let pass = this.elements[0];
   let text = this.elements[1];

   console.log(pass.value);
   console.log(text.value);
   alert(`hi ${text.value},and your pass is ${text}`)
   

});