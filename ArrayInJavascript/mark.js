const prompt=require("prompt-sync")({sigint:true}); 

let marks=[45,78,96,12,36,46];

let res=0;

for (let val of marks) {
    res = res +val;
}
console.log(`your total marks ${res}`);
console.log("avg",res/marks.length);