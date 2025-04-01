//global and local variables
//global



function greet(){
    return `Hello my name is ${person.name} & I am ${person.age} years old`
}

const person = {
    name:"Jason W Maxwell",
    age: 46,
    email: "jasonwmaxwell@proton.com",
    isSubscribed:true,
    hobbies: ["Writing", "Programming", "Business"],
    address: {
        city: "New York",
        idk: true
    }
}

console.log(person);