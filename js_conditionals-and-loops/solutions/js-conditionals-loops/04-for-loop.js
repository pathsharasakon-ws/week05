// Solution 04 — for loop
// ----------------------
// Sum every whole number from 1 to n.

function sumTo(n) {
  // Accumulator starts at 0 so that n < 1 (loop never runs) naturally returns 0.
  let total = 0;
  // Start at 1, keep going while i <= n, step up by 1 each pass.
  for (let i = 1; i <= n; i++) {
    total += i; // add the current number onto the running total
  }
  return total;
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(sumTo(5), 15);
strictEqual(sumTo(1), 1);
strictEqual(sumTo(10), 55);
strictEqual(sumTo(0), 0);
strictEqual(sumTo(-3), 0);

console.log("All tests passed ✅");
