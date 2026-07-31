// Solution 07 — nested loops
// --------------------------
// Build a width x height rectangle of stars as a single string.

function rectangle(width, height) {
  // Guard: a rectangle with no width or no height is empty.
  if (width < 1 || height < 1) {
    return "";
  }

  const rows = [];
  // OUTER loop: one iteration per row.
  for (let r = 0; r < height; r++) {
    let row = "";
    // INNER loop: build up this row one star at a time (the nested loop).
    for (let c = 0; c < width; c++) {
      row += "*";
    }
    rows.push(row);
  }

  // Join the rows with newlines. join() puts a separator *between* items only,
  // so there is no trailing newline.
  return rows.join("\n");
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(rectangle(3, 2), "***\n***");
strictEqual(rectangle(1, 1), "*");
strictEqual(rectangle(4, 3), "****\n****\n****");
strictEqual(rectangle(0, 5), "");
strictEqual(rectangle(2, 0), "");

console.log("All tests passed ✅");
