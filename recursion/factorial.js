/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param int The non-negative integer to calculate the factorial of.
 * @returns number factorial of the given integer.
 */
function factorial(int) {
    if (int >= 1) {
        return (int * factorial(int - 1));
    }
    else {
        return 1
    }
}

console.log(factorial(3)); // 3! => 6
console.log(factorial(5)); // 5! => 120
console.log(factorial(10)); // 10! => 3,628,800