/*

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the
 last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

*/

function list(names){
    var msg = ""
    length = names.length

    names.forEach(el => {
        if (names[0] == el) {
            msg = el.name
        } else if (el == names[length - 1]) {
            msg = msg + " " + "&" + " " + el.name
        } else {
            msg = msg + "," + " " + el.name
        }
    });
    return msg
  }
  