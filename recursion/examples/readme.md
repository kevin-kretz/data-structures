# Examples
- [Factorial](#factorial)
- [Fibonacci Sequence](#fibonacci-sequence)

## Factorial
The factorial of a non-negative integer (n) is the product of all positive integers less than or equal to n.
It is denoted by the exclamation point symbol `n!`.
Mathematically, the factorial of n is defined as:
`n! = n * (n - 1) * (n - 2) * ... * 2 * 1`
> Example: 5! (factorial of 5) = 5 * 4 * 3 * 2 * 1 = 120.

### Special Cases
- By convention, 0! (factorial of 0) is defined as 1, since it is the empty product.
- Factorials are not defined for negative integers.

### Factorial example code
[factorial.js](./factorial.js)

## Fibonacci Sequence
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers. It starts with 0 and 1, and continues as 1, 2, 3, 5, 8, 13, and so on.
Mathematically, the Fibonacci sequence (denoted by F(n)) can be defined recursively as:
`F(0) = 0`
`F(1) = 1`
`F(n) = F(n-1) + F(n-2) for all n > 1`

> Example: The 6th number of Fibonacci Sequence = 3 + 5 = 8.

### Fibonacci Sequence example code
[fibonacci.js](./fibonacci.js)