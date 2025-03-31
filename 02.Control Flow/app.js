//global and local variables
//global

function greet(){
    return `Hello my name is ${person.name} & I am ${person.age} years old`
}

const person = {
    name:"jason W Maxwell",
    age: 46,
    greet,
}

console.log(person.greet());