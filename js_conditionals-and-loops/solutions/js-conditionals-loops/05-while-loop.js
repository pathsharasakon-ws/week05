// Solution 05 — while loop
// ------------------------
// Count the digits of a whole number.

function countDigits(n) {
  // Work with the absolute value so a leading minus sign doesn't matter.
  n = Math.abs(n);

  // Special case: 0 has one digit, but the loop below would run zero times
  // (0 is not > 0), so we would wrongly return 0. Guard it explicitly.
  if (n === 0) {
    return 1;
  }

  let count = 0;
  // Chop the last digit off each pass (integer divide by 10) until nothing left.
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(countDigits(7), 1);
strictEqual(countDigits(100), 3);
strictEqual(countDigits(-4520), 4);
strictEqual(countDigits(0), 1);
strictEqual(countDigits(999999), 6);

console.log("All tests passed ✅");
