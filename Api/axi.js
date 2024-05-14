//  const axios = require('packageName');
let url = "https://catfact.ninja/fact";
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let fact = await getFact();
    console.log(fact);
    h1.innerText=fact;
})


async function getFact(){
    try {
        let res = await axios.get(url);     
        return res.data.fact;

    }catch(e){
        console.log("error caught ",e);
        return "not fact found";
    }
}