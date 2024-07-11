// function saveDb(data, sucess, failur) {
        //     let netSpeed = Math.floor(Math.random() * 10) + 1;

        //     if (netSpeed > 4) {
        //         sucess();
        //     } else {
        //         failur();
        //     }
        // }

        // saveDb("hello",
        //     () => {
        //         console.log("sucess : net is very fast");
        //         saveDb("kamal",
        //             () => {
        //                 console.log("sucess2 : net is very fast");
        //             },
        //             () => {
        //                 console.log("failure2 : net is slow");
        //             }

        //         );
        //     },
        //     () => {
        //         console.log("failure : net is slow");
        //     }

        // );

    // function saveDb(){
    //     return new Promise ((relove,reject)=>{
    //         let interSpeed = Math.floor(Math.random ()* 10)+1;
    //         console.log(interSpeed);
    //         if (interSpeed > 4){
    //             relove("your data was saved");
    //         }else{
    //             reject("your data was not saved");
    //         }
    //     });
    // }

    // const promtu = new Promise (function(relove,reject){
    //     relove("hello aly");
    // })

    // promtu.then(function(user){
    //     console.log(user);
    // });


    const promisFour = new Promise (function(relove,reject){
      setTimeout(function() {
        let error = false;
        if(!error){
            relove({user: "kamal",email: "example@com"})
        }else{
            reject("somethig went error");
        }
      },1000);
    })


promisFour.then((user)=>{
    console.log(user);
    return user
})
.catch(function(error){
  console.log(error);
}).finally(()=>console.log("the promis is ethir reslove or rejected"))