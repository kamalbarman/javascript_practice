let url = "https://dog.ceo/api/breeds/image/random";
let h1 = document.getElementById("img");
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let fact = await getFact();
    console.log(fact);
    h1.src=fact.message;
});

async function getFact(){
 try {
    let res = await axios.get(url);
    return res.data;
 } catch (error) {
    console.log("error cauth",error);
 }
}