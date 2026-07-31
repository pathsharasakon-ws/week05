// Exercise 04 — for loop
// ----------------------
// Implement sumTo(n): return the sum of all whole numbers from 1 up to and
// including n. For example sumTo(5) is 1 + 2 + 3 + 4 + 5 = 15.
// If n is less than 1, return 0.
//
// Use a classic for loop: for (let i = 1; i <= n; i++) { ... }

function sumTo(n) {
  // TODO: replace this with your implementation
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(sumTo(5), 15);
strictEqual(sumTo(1), 1);
strictEqual(sumTo(10), 55);
strictEqual(sumTo(0), 0);
strictEqual(sumTo(-3), 0);

console.log("All tests passed ✅");
