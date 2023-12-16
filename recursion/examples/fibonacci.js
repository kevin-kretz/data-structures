/**
 * Calculates the nth Fibonacci number.
 *
 * @param int The index of the desired Fibonacci number (starting from 1).
 * @returns int The nth Fibonacci number.
 */
function fibonacci(int) {
    if (int >= 3) {
        return (fibonacci(int - 2) + fibonacci(int - 1));  // recursion case
    }
    else {
        return 1;  // base case
    }
}

console.log(fibonacci(8)); // The 8th number in the Fibonacci Sequence is 21.
console.log(fibonacci(3)); // The 8th number in the Fibonacci Sequence is 2.
console.log(fibonacci(21)); // The 8th number in the Fibonacci Sequence is 10,946.