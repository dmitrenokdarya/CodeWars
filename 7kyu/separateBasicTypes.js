//Given: a sequence of different type of values (number, string, boolean). //You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

//keep order of values like in input array if type is not presented in input, no corresponding property are expected



//Solution

function separateTypes(input) {
    let newArray = {}
    input.forEach((n) => {
        if(typeof n === 'string'){
            if (!newArray.string) newArray.string = [];
            newArray.string.push(n)
        }
        if (typeof n === 'number') {
            if (!newArray.number) newArray.number = [];
            newArray.number.push(n)
        }
        if (typeof n === 'boolean') {
            if (!newArray.boolean) newArray.boolean = [];
            newArray.boolean.push(n)
        }
    })
    return newArray
}