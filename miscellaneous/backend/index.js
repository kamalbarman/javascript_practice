const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); //middle ware for reading 
app.use(express.json()); //use to read json data

app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`sending get request ${user}`);
    // console.log("post sended");
    
})

app.post("/register",(req,res)=>{
   console.log(req.body);
   let {user,password} = req.body;
    res.send(`sending post request ${user},${password}`);
    // console.log("post sended");
    
})

app.listen(port,() =>{
    console.log(`port is listening on ${port}`);
});
