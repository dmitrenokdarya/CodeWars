//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution_1

function boolToWord(bool) {
    if (bool === true) {
        return 'Yes'
    } else if (bool === false) {
        return 'No'
    }
}


//Solution_2

function boolToWord(bool){
    return bool ? 'Yes':'No';
}