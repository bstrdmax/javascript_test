// for loop
//DRY > don't repeat yourself
//for(initialExpression; condition; incrementExpression) {}

for (let i=1; i<=15; i++){
    console.log("----outer----",i);
    //nested loop
    for (let j=1; j<=5; j++){
        console.log("----inner----",j);
    }
}


