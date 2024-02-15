const prompt=require("prompt-sync")({sigint:true}); 

let price = [250,645,300,900,50]

// let idx=0;


// for (let valu of price) {
//     // console.log(`valu is ${idx}=${valu}`);
//     let off = valu/10;
//     price[idx]=price[idx]-off;
    
//     console.log(price[idx]);
//     idx++;
// }
// console.log(price);

for (let i =0; i<price.length; i++) {
    // console.log(price[i]);

    let off = price[i]/10;

    price[i]=price[i]-off;
    console.log(`price decrease after discount ${price[i]}`);
    
}