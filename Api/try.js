let url = "https://catfact.ninja/fact";

let h1 = document.querySelector("h1");

async function getFact(){
    try{
        let res = await fetch(url); 
         let data =  await res.json();
         console.log(data.fact);
         h1.innerText=data.fact;
    }catch(err){
        console.log("error is ",err);
    }

setTimeout(() => {
    const para = document.createElement("p");
    para.innerText="hello";
    h1.appendChild(para);

}, 1000);
}

getFact();