/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' 
comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {
    var conc = ""
    str = str.split("")
    console.log(str);
    
    str.forEach(el => {
        switch (el) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":    
                break;
            default:
                conc = conc + el
                break;
        }
    });
    return conc;
}