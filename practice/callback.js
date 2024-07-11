// let laal = document.querySelector("h3");
// //  this is callback hell
// function alu(piyaj, lol,nextColorChange) {
//     setTimeout(() => {
//         laal.style.color = piyaj;
//         if (nextColorChange) nextColorChange(); // Corrected
//     }, lol);
// }

// alu("red", 1000, () => {
//     alu("orange", 1000, () => {
//         alu("blue", 1000, () => {
            
//         });
//     });
// });

let h3 = document.querySelector("h3");

function colorChange(color,delay,nextColor){
    setTimeout(()=>{
        h3.style.color= color;
        if(nextColor) nextColor();
    },delay);
}



colorChange("red",1000,()=>{
    colorChange("blue",1000,()=>{
        colorChange("pink",1000,()=>{
            colorChange("green",1000,()=>{
                colorChange("yellow",1000);
                
            });
        });
    });
});