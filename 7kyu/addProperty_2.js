//Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.


//Solution

function addProperty(obj, prop, value) {
    for (let key in obj){
        if (key === prop){
        throw new TypeError ('Error message');
        }
    }
    return obj[prop] = value;
} 