// Exercise 08 — FizzBuzz (capstone: conditionals + a loop)
// --------------------------------------------------------
// Implement fizzBuzz(n): return an ARRAY with one entry for each number from
// 1 to n, applying these rules to each number:
//   - divisible by BOTH 3 and 5 -> the string "FizzBuzz"
//   - divisible by 3 only       -> the string "Fizz"
//   - divisible by 5 only       -> the string "Buzz"
//   - otherwise                 -> the number itself (as a number, not a string)
//
// Example: fizzBuzz(5) returns [1, 2, "Fizz", 4, "Buzz"].
// If n is less than 1, return an empty array [].
//
// Hint: the order of your checks matters — test "both" before "3 only"/"5 only".
// The modulo operator n % k gives the remainder; it is 0 when k divides n.

function fizzBuzz(n) {
  // TODO: replace this with your implementation
}

// --- Tests (do not edit) ---
import { deepStrictEqual } from "node:assert";

deepStrictEqual(fizzBuzz(5), [1, 2, "Fizz", 4, "Buzz"]);
deepStrictEqual(fizzBuzz(1), [1]);
deepStrictEqual(fizzBuzz(15).slice(-1), ["FizzBuzz"]);
deepStrictEqual(fizzBuzz(3), [1, 2, "Fizz"]);
deepStrictEqual(fizzBuzz(0), []);

console.log("All tests passed ✅");
