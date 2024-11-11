//Give you a function animal, accept 1 parameter:obj and return a string like this: "This white dog has 4 legs."


//Solution

function animalFunction(obj) {
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}

console.log(animalFunction({ name: "dog", legs: 4, color: "white" }))