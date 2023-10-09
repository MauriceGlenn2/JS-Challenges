/**
 * Given two numbers, return true if the sum of both numbers is greater than
 * 100 otherwise, return false
 * sumGreaterThan100(20, 10) -> false
 * sumGreaterThan100(50, 60) -> true
 * sumGreaterThan100(100, -50) -> false
 * 
 */

function sumGreaterThan100(numOne, numTwo) {
    if (numOne + numTwo > 100) {
        return true
    }
        return false          // dont need else statement 
}
console.log(sumGreaterThan100(100, -50));



// shorter way, since "< > <= =>" returns a boolean anyway 
// will state true or false either way

function sumGreaterThan100(numOne, numTwo) {
  return (numOne + numTwo > 100) 
}
console.log(sumGreaterThan100(100, -50));