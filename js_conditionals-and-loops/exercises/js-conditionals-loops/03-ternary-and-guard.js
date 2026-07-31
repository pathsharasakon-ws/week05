// Exercise 03 — ternary operator + guard clause
// ----------------------------------------------
// Implement safeDivide(a, b) with TWO techniques:
//
//   1. GUARD CLAUSE (early return): if either a or b is not a number, return
//      the string "invalid input" immediately. Checking the bad case first and
//      returning early keeps the main logic un-nested and easy to read.
//
//   2. TERNARY (condition ? valueIfTrue : valueIfFalse): for valid inputs,
//      return the string "cannot divide by zero" when b is 0, otherwise return
//      a / b. Express this decision as a single ternary expression.

function safeDivide(a, b) {
  // TODO: replace this with your implementation
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(safeDivide(10, 2), 5);
strictEqual(safeDivide(7, 2), 3.5);
strictEqual(safeDivide(0, 4), 0);
strictEqual(safeDivide(5, 0), "cannot divide by zero");
strictEqual(safeDivide("x", 2), "invalid input");
strictEqual(safeDivide(5, null), "invalid input");

console.log("All tests passed ✅");
