// let url = "https://icanhazdadjoke.com/";
// let btn = document.querySelector("button");

// async function getJoke(){
    
//     try{let res = await axios.get(url);
//     console.log(res.data);
//     }catch(e){
//         console.log("error caught",e);
//     }
// }

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// console.log(btn);


// btn.addEventListener("click",async ()=>{
   
//    let country = document.querySelector("input").value;
//    console.log(country);
//    let colleges = await getColleges(country);
//    console.log(colleges);

//    show(colleges);
// });

// function show(colleges){
//     let list = document.querySelector("#list");
//     for (col of colleges) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res = await axios.get(url+ country);
//         // console.log(res);
//         return res.data;
//     }catch(err){
//         console.log("error : ",err);
//         return [];
//     }
// }

function generateRandomNumber() {
    const minNumber = parseInt(document.getElementById("minNumber").value);
    const maxNumber = parseInt(document.getElementById("maxNumber").value);
  
    // Input validation (optional)
    if (minNumber >= maxNumber) {
      alert("type number under your range!");
      return;
    }
  
    // Generate random number within the range
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  
    // Display the generated number
    document.getElementById("randomNumberDisplay").textContent = `Random number: ${randomNumber}`;
  }
