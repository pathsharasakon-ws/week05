// Solution 08 — FizzBuzz (capstone: conditionals + a loop)
// --------------------------------------------------------
// Produce the classic FizzBuzz sequence as an array.

function fizzBuzz(n) {
  const result = [];

  // Loop over every number from 1 to n. If n < 1 the loop never runs and we
  // return the empty array we started with.
  for (let i = 1; i <= n; i++) {
    // Check the most specific rule (divisible by both) FIRST. If we checked
    // "divisible by 3" first, multiples of 15 would wrongly become "Fizz".
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i); // push the number itself, not a string
    }
  }

  return result;
}

// --- Tests (do not edit) ---
import { deepStrictEqual } from "node:assert";

deepStrictEqual(fizzBuzz(5), [1, 2, "Fizz", 4, "Buzz"]);
deepStrictEqual(fizzBuzz(1), [1]);
deepStrictEqual(fizzBuzz(15).slice(-1), ["FizzBuzz"]);
deepStrictEqual(fizzBuzz(3), [1, 2, "Fizz"]);
deepStrictEqual(fizzBuzz(0), []);

console.log("All tests passed ✅");
