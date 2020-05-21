/* 

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag (str) {
 
    var final = "#"
    if (str.length == 0) return false

    if (str.indexOf(" ") >= 0) {
        var array = str.split(" ")
    } else {
        final = final + (str.charAt(0).toUpperCase() + str.slice(1))
        if (final.length > 140) return false
        return final
    }

    if (array.length > 1) {
        array.forEach(el => {
            el = el.charAt(0).toUpperCase() + el.slice(1)
            final = final + el
        });
    }

    if (final.length > 140) return false
    if (final == '#') return false

    return final
}