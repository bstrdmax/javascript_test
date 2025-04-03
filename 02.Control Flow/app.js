//set interval

const intervalId= setInterval(function(){
    console.log(`this function will be executed`)
},1000)

//stop interval


setTimeout(function(){
    clearInterval(intervalId);
    console.log(`stop interval after 10 seconds`);
},10000);


