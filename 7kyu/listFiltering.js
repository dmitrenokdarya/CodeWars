//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


//Solution
function filter_list(l) {
    const newList = l.filter((n) => {
        return typeof n === 'number'
    })
    return newList
}