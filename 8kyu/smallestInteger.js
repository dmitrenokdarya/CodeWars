//Given an array of integers your solution should find the smallest integer.

//Solution_1

function findSmallestInt(arr) {
    let smallestInt = arr [0];
    for (let i = 0; i < arr.length; i++) {
        if (smallestInt > arr[i]) {
        smallestInt = arr[i];
        }
    }
    return smallestInt;
}


//Solution_2

function findSmallestInt(arr) {
    return Math.min(...arr);
}