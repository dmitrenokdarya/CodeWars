//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.


//Solution

function arrayPlusArray(arr1, arr2) {
    let sumOfFirstArray = 0;
    let sumOfSecondArray = 0;
    for (let i = 0; i < arr1.length; i++){
        sumOfFirstArray += arr1[i]; 
    }
    for (let i = 0; i < arr2.length; i++) {
        sumOfSecondArray += arr2[i];
    }
    let sum = sumOfFirstArray + sumOfSecondArray;
    return sum; //something went wrong
}