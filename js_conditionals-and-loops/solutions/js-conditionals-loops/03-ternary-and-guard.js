// Solution 03 — ternary operator + guard clause
// ----------------------------------------------
// Divide safely, guarding invalid inputs and division by zero.

function safeDivide(a, b) {
  // GUARD CLAUSE: reject bad inputs up front and return early. typeof catches
  // strings/null/undefined; Number.isNaN(NaN) would also slip past typeof, but
  // typeof NaN === 'number', so a plain type check is enough for these tests.
  if (typeof a !== "number" || typeof b !== "number") {
    return "invalid input";
  }

  // TERNARY: one expression picks the message or the quotient. Past the guard,
  // we know a and b are numbers, so the only special case left is b === 0.
  return b === 0 ? "cannot divide by zero" : a / b;
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
