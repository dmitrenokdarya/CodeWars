//You have a group chat application, but who is online!?

//You want to show your users which of their friends are online and available to chat!

//Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

//If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

//username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

//Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).


//Solution

const whosOnline = (friends) => {
    const output = {}
    friends.forEach((n) => {
        if (n.status === 'online' && n.lastActivity <= 10) {
            if (!output.online) output.online = [];
            output.online.push(n.username)
        } else if (n.status === 'offline') {
            if(!output.offline) output.offline = [];
            output.offline.push(n.username)
        } else {
            if(!output.away) output.away = [];
            output.away.push(n.username)
        }
    })
    return output;
}