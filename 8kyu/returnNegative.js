//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//Solution_1

function makeNegative(num) {
    if (num > 0) {
    num = - num;
    }
    return num
} 


//Solution_2

function makeNegative(num) {
    return num > 0 ? -num : num;
}