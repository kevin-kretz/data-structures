/**
 * Calculates the number of possible jumps for a frog to reach the other side of a river.
 *
 * @param width The width of the river (distance from start to end).
 * @returns number number of possible jumps the frog can make.
 */
function countPossibleJumps(width) {
    if (width > 2) {
        return (countPossibleJumps(width - 2) + countPossibleJumps(width -1));
    }

    // The frog can either jump on to the stone in the middle, then to the other side OR the frog can skip the stone, and jump directly to the other side.
    else if (width === 2) {
        return 2;
    }
    // The frog will jump to the other side
    else {
        return 1;
    }
}

console.log(countPossibleJumps(3)); // => 3
console.log(countPossibleJumps(6));  // => 13
console.log(countPossibleJumps(11));  // => 144