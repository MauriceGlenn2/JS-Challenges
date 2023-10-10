/**
 * if a number is even return 1 otherwise return -1
 * 
 * booleanInt(1) -> -1
 * booleanInt(1) -> -1
 * booleanInt(1) -> -1
 */

function booleanInt(num) {
    if (num % 2 === 0) {
        return 1
    } 
    return -1
}

console.log(booleanInt(1))


//<-------------------Tetnary OP------------------>

function booleanInteger(num1) {
   return num1 % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(5))