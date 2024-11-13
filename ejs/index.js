import express from "express";

const app = express();

const port = 3000;

app.set("view engine", "ejs"),

app.listen (port,()=>{
    
console.log(`port is litening on ${port}`);
});
app.get("/",(req,res)=>{
    res.render ("home.ejs")

})
