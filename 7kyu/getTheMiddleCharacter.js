//You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//If the string's length is odd, return the middle character.
//If the string's length is even, return the middle 2 characters.


//Solution

function getMiddle(s) {
    let middle = '';
    return s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[Math.floor(s.length / 2)]
}