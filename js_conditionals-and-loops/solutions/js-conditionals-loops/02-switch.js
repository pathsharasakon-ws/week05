// Solution 02 — switch
// --------------------
// Classify a day number as weekend / weekday / invalid.

function dayType(dayNumber) {
  switch (dayNumber) {
    // Stacked case labels with no break "fall through": 0 and 6 share one block.
    case 0:
    case 6:
      return "weekend";
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "weekday";
    // default runs when no case matched — here, any number outside 0..6.
    default:
      return "invalid";
  }
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
