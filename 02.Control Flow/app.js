//function return

function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb();
}

function cb(){
    console.log(`I am callback function`);
};

greet("Jason W Maxwell", cb)