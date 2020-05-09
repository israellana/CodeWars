/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  var splited = str.split(" ")
  var final = ""
  splited.forEach(element => {
    
    switch (element) {
      case "?":
        final = final + " " + element
        break;

        case "!":
          final = final + " " + element
          break;
    
      default:
        element = element + element[0] + "ay"
        var el = element.substring(1)
        final = final + " " + el
        break;
    }
  })
return final.substring(1)
};