let h1 = document.querySelector("h1");

function colorChange(color,delay){
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            h1.style.color=color;
            resolve("color changed");
        }, delay);
    });
  
}

colorChange("red", 1000)
.then(() => {
    return colorChange("blue", 1000);
}).then(() => {
    return colorChange("orange",1000);
});

