//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Input strings will only contain letters. Note: keep the original order of the names in the output.


//Solution

function friend(friends) {
    const myFriends = [];
    const sorting = friends.filter((name) => {
        if (name.length === 4){
        myFriends.push(name)
        }
    })
    return myFriends
}