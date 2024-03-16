let boto = document.createElement('button');
 document.querySelector('body').append(boto);
 boto.innerHTML="click me";
boto.addEventListener('click',function(){
    boto.classList.add("buto");
})