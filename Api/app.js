// "https://catfact.ninja/fact"

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     console.log(res.json());

// }).catch((err)=>{
//     console.log("error caught",err);
// })

let url = "https://catfact.ninja/fact";

let h1 = document.querySelector("h1");

fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{

    h1.innerText=data.fact;
    console.log("data1 is ",data.fact);
    // return fetch(url);
})
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data2)=>{
    h1.innerText=data2.fact;
    console.log("data2 ",data2.fact);
    // return fetch(url);
})
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data3)=>{
    h1.innerHTML=data3.fact;
    console.log("data3 ",data3.fact);
    // return fetch(url);
})
.catch((err)=>{
    console.log("error caught",err);
})

