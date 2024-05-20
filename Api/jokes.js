// let url = "https://icanhazdadjoke.com/";
// let btn = document.querySelector("button");

// async function getJoke(){
    
//     try{let res = await axios.get(url);
//     console.log(res.data);
//     }catch(e){
//         console.log("error caught",e);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");


btn.addEventListener("click",async ()=>{
   let country = document.querySelector("input").value;
   console.log(country);
   let colleges = await getColleges(country);
   console.log(colleges);

   show(colleges);
});

function show(colleges){
    let list = document.querySelector("#list");
    for (col of colleges) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+ country);
        // console.log(res);
        return res.data;
    }catch(err){
        console.log("error : ",err);
        return [];
    }
}