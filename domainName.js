/*

Write a function that when given a URL as a string, parses out just 
the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

function domainName(url){
    var first = 0
    if (url.indexOf("www.") >=0) {
        first = url.indexOf("www.") + 4
    } else if (url.indexOf("//") >= 0) {
        first = url.indexOf("/") + 2
    }
    const final = url.indexOf(".", first)
    return url.slice(first, final)
  }
