//funciton expressions shortened

//function greet(username){
//    return `Hi ${username}`;
//}

//console.log(greet("Maximillion"));


//greet = (username)=> `Hi ${username}`;
//console.log(greet("Maximillion"));

//const double = (n) => n *2;
//console.log(double(1000));

setTimeout(()=>{
    console.log("Hello");
    setTimeout(()=>{
        console.log("Hey");
        setTimeout(()=>{
            console.log("Namaste");
            setTimeout(()=>{
                console.log("Hi");
                setTimeout(()=>{
                    console.log("Bonjour");
                },2000);
            },2000);
        },2000);
    },2000);
},2000);