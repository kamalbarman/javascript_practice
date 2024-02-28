// print hello world 5 times at interval of 2 sec

const fivetime = setInterval(()=>{
            console.log("hello world");
        },2000);


// console.log(fivetime());

setTimeout(() => {
   clearInterval(fivetime); 
}, 10000);