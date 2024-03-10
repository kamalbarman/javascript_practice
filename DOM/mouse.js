let btn = document.querySelectorAll('button');
console.dir(btn);

for (const bie of btn) {
    // bie.addEventListener("click",hello);
    // bie.addEventListener("click",hell);
    bie.addEventListener("dblclick",function(){
        console.log("you double clicked ");
    })
}

function hello(){
    alert("it is alu");
};

function hell(){
    alert("it is piyaj");
};