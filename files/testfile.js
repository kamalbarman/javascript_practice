// // const fs = require("fs")
// import fs from "fs"
// import path from "path";


// const directory = path.join(__dirname,"files")
// const filepath = path.join(directory,"allu.txt")

// console.log("starting");

// fs.writeFile("allu.txt"," alu khalo",()=>{
//     console.log("process complete")
//     fs.readFile("allu.txt",(error,data)=>{
// console.log(error,data.toString());
//     })   
// })

// fs.appendFile("allu.txt","la khabo",(e,d)=>{
//     console.log(d)
    
// })

// console.log("ending");


import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the correct file path directly
const filepath = path.join(__dirname, "allu.txt");

console.log("Starting");

// Write to the file
fs.writeFile(filepath, "alu khalo", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("Write process complete");

  // Read the file
  fs.readFile(filepath, (error, data) => {
    if (error) {
      console.error("Error reading file:", error);
      return;
    }
    console.log("File content after write:", data.toString());

    // Append to the file after reading it
    fs.appendFile(filepath, " la khabo", (appendError) => {
      if (appendError) {
        console.error("Error appending to file:", appendError);
        return;
      }
      console.log("Append process complete");

      // Read the file again to confirm the appended content
      fs.readFile(filepath, (error, updatedData) => {
        if (error) {
          console.error("Error reading updated file:", error);
          return;
        }
        console.log("File content after append:", updatedData.toString());
      });
    });
  });
});

console.log("Ending");
