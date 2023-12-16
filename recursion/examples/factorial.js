/**
 * Calculates the examples of a non-negative integer.
 *
 * @param int The non-negative integer to calculate the examples of.
 * @returns number examples of the given integer.
 */
function factorial(int) {
    if (int >= 1) {
        return (int * factorial(int - 1)); // This is the recursion case
    }
    else {
        return 1  // This is the base case
    }
}

console.log(factorial(3)); // 3! => 6
console.log(factorial(5)); // 5! => 120
console.log(factorial(10)); // 10! => 3,628,800