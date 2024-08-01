import express from "express";

const app = express();

let port = 3000;

app.listen(port, () =>{
    console.log(`app is listening in ${port} number`);
})


// app.use((req,res) => {
//     console.log("recived incoming request");
//     let code = "<h1>1 to 10</h1> <ul> <li>1</li> </ul>"
//     res.send(code);
// })



// example of routing

app.get("/",(req,res)=>{
    res.send("your are in the root path");
    console.log("running  root");
    
});

app.get("/alu",(req,res)=>{
    console.log("server is running");
    res.send("your are in the 1 path");
    
});

app.get("/:username/:id",(req,res)=>{
let {username, id } = req.params;
let htmlS = (`<h1> it is me @${username} and this is my id ${id}`)
res.send(htmlS);
});

//for custom response


app.get("/lu", (req, res) => {
    console.log("server is running");
    let code = "<h1>Fruit</h1> <ul> <li>Apple</li> <li>Color</li> </ul>";
    res.send(code);
});


app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no result");
})


app.get("*", (req,res)=>{
    res.send("this path is not exist");
});
