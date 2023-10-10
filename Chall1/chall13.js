/**
 * check if user is logged in and subscribed
 * 
 * create a function that take in two strings, 
 * if the first sting is euqal to "logged__in" the second string is euqal to "sub"
 * return true, other wise return false
 * 
 * isLoggedInAndSubscribed('logged_in', 'sub') -> true
 * isLoggedInAndSubscribed('logged_in', 'unsub') -> false
 */

// && both have to be true
function isLoggedInAndSubscribed (str1, str2) {
    return str1 === "logged__in" && str2 === 'sub'
}
console.log(isLoggedInAndSubscribed('logged__in', 'unsub')) //return true



//check if user is logged in or subscribed

// || only one has to be true
function isLoggedInAndSubscribed(str1, str2) {
  return str1 === "logged__in" || str2 === "sub";
}
console.log(isLoggedInAndSubscribed("logged__out", "unsub")); //return false