// Exercise 02 — switch
// --------------------
// Implement dayType(dayNumber): given a number 0..6 where 0 = Sunday and
// 6 = Saturday, return "weekend" for Saturday and Sunday, and "weekday" for
// Monday through Friday. For any number that is not 0..6, return "invalid".
//
// Use a switch statement. Hint: several cases can share one block by stacking
// case labels with no break between them (fall-through).

function dayType(dayNumber) {
  // TODO: replace this with your implementation
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(dayType(0), "weekend");
strictEqual(dayType(6), "weekend");
strictEqual(dayType(1), "weekday");
strictEqual(dayType(5), "weekday");
strictEqual(dayType(7), "invalid");
strictEqual(dayType(-1), "invalid");

console.log("All tests passed ✅");
