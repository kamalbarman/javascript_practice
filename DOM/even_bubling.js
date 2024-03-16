let div = document.querySelector("div");
let ul =  document.querySelector("ul");
let lis = document.querySelectorAll("li");


div.addEventListener("click",function(){
    console.log("you click on div");
})

ul.addEventListener("click",function(){
    console.log("you click on ul");
})

for ( li of lis) {
    li.addEventListener("click",function(){
        console.log("li was clicked");
    });
}