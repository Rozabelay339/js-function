/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `22 and 91`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


 /*const sumRangeNumbers = (num1 ,num2) => {
    let sum =  num1
    for(i = num1; i <= num2; i++){
     sum+= i;
    }
    return sum;
}
const ANSWER = sumRangeNumbers(22,91)
console.log(ANSWER)
 */


/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `plum` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


 const fruitColor = (fruit) => {
    let color;
switch (fruit) {
    case ("banana"):
    color = "The" + fruit + "is yellow.";
    break;
    case ("apple"):
    color = "The" + fruit + "is green.";
    break;
    case ("kiwi"):
    color =     "The" + fruit + "is green.";
    break;
    case ("plum"):
    color =  "The" + fruit + "is red.";
        break;

    default:
    color =  "The" + fruit + "is unkown.";
        break;
}
return color
}
const result = fruitColor("plum")
console.log(result)


/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `25 and 46`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


/*function printRange(rangeStart, rangeStop) {
    let result = " ";
    for (let i = rangeStart; i <= rangeStop; i++) {
        result += i + ", ";  
    }
    return result.slice(0, -2);  
}
const ANSWER = printRange(25, 46);

console.log(ANSWER);*/ 

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `46 and 25`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

/*const printRangeReversed = (rangeStart,rangeStop ) =>{
    let result = "";
    for (i = rangeStop; i >= rangeStart; i--){
        result +=i + ", "
    }
    return result.slice(0, -2);
}
const ANSWER = printRangeReversed(25, 46);

console.log(ANSWER); 

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `25 and 46` (both ways).
 *
 * Answer with the result using arguments 25 and 46.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

// const printAnyRange = (rangeStart, rangeStop) => {
// if (rangeStart < rangeStop) {
//     return printRange;
// }
// if(rangeStart > rangeStop) {
//     return printRangeReversed;
// }
// }
// const ANSWER = printAnyRange(25, 46);

// console.log(ANSWER);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `131 - 547` and the value `434`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


/*const inRange = ( rangeStart, rangeStop, value) => {
let result = true
if(value > rangeStart && value < rangeStop){
    return true;
}
else{ 
    return false;
}
}
const ANSWER = inRange(132, 547, 434)
console.log(ANSWER);
*/

