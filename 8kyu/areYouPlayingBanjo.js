//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings



//Solution

function areYouPlayingBanjo(name) {
    let answer
    name[0] === 'R' || name[0] === 'r' ? answer = name + " plays banjo" : answer = name + " does not play banjo"
    return answer;
}