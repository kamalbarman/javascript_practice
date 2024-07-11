function savedb(data){
    return new Promise((resolve, reject) => {
        
   
    let netSpeed = Math.floor(Math.random()*10)+1;
    if(netSpeed>4){
        resolve("data was saved");
        console.log("saved data");
    }else{
        console.log("data not saved");
        reject("data is not saved");
    }
});
}
savedb("college")
.then ((result)=>{
    console.log("hello i am kamal");
    console.log("result of promic",result);
    return savedb("school");
}).then((result)=>{
    console.log("i am human");
    console.log("result of promics",result);
}).catch((error)=>{
    console.log("somthing went wrong");
    console.log("error of promis",error);
})
