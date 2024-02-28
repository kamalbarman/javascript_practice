let student = {
    name: "kamal",
    assames: 78,
    science: 67,
    math: 97,
    omm(){
        let avg = (this.assames+this.math+this.science)/3;
        console.log(avg);
    }
}

console.log(student.omm(        ));

