/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    var length = [];
    s = s.split(" ");
    s.forEach(el => {
        length.push(Number(el.length))
    });
    return Math.min(...length)
}