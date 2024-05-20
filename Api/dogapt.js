// let url = "https://dog.ceo/api/breeds/image/random";
// let h1 = document.getElementById("img");
// let btn = document.querySelector("button");

// btn.addEventListener("click",async()=>{
//     let fact = await getFact();
//     console.log(fact);
//     h1.src=fact.message;
// });

// async function getFact(){
//  try {
//     let res = await axios.get(url);
//     return res.data;
//  } catch (error) {
//     console.log("error cauth",error);
//  }
// }
let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let h1 = document.getElementById("img");

btn.addEventListener("click",async ()=>{
   let fact = await getFact();
   h1.src=fact.message;

});


 async function getFact(){
   try{
      let res = await axios.get(url);
   return res.data;
   }catch(e){
      console.log("error cathc",e);
   }
 }

// const url = "https://dog.ceo/api/breeds/image/random";
// const btn = document.querySelector("button");
// const img = document.getElementById("img");

// btn.addEventListener("click", () => updateImage());

// async function updateImage() {
//   try {
//     const res = await axios.get(url);
//     img.src = res.data.message;
//   } catch (e) {
//     console.error("Error:", e);
//   }
// }
