// Solution 01 — if / else if / else
// ----------------------------------
// Return a letter grade for a 0..100 score.

function letterGrade(score) {
  // Check from the highest band down. Because each branch only runs when all
  // the branches above it were false, we only need the lower bound of each band.
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    // Anything left (below 60) falls through to the final else.
    return "F";
  }
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
