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

app.get("/",(req,res)=>{
    res.send("your are in the root path");
    
});

app.get("/alu",(req,res)=>{
    console.log("server is running");
    res.send("your are in the 1 path");
    
});


//for custom response
app.get("*", (req,res)=>{
    res.send("this path is not exist");
});