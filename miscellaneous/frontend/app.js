class Person {
    constructor(name,age) {
        this.name = name;
        this.age  = age;
    }
    talk(){
        console.log(`het! my name is ${this.name}`);
        
    }
}

let p1 = new Person("kamal", 23);
console.log(p1);

let p2 = new Person("bishal", 23);