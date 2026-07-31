// Exercise 01 — if / else if / else
// ----------------------------------
// Implement letterGrade(score): given a number from 0 to 100, return the
// letter grade as a string using this scale:
//   90 and above -> "A"
//   80 to 89     -> "B"
//   70 to 79     -> "C"
//   60 to 69     -> "D"
//   below 60     -> "F"
//
// Use an if / else if / else chain. Do not worry about scores outside 0..100.

function letterGrade(score) {
  // TODO: replace this with your implementation
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(letterGrade(95), "A");
strictEqual(letterGrade(90), "A");
strictEqual(letterGrade(89), "B");
strictEqual(letterGrade(72), "C");
strictEqual(letterGrade(60), "D");
strictEqual(letterGrade(59), "F");
strictEqual(letterGrade(0), "F");

console.log("All tests passed ✅");
