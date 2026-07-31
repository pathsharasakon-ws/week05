// Solution 06 — for...of
// ----------------------
// Count vowels in a lowercase string.

function countVowels(word) {
  const vowels = "aeiou";
  let count = 0;

  // for...of hands us each character directly — no index bookkeeping needed.
  for (const char of word) {
    // .includes returns true when the character is one of the vowels.
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(countVowels("banana"), 3);
strictEqual(countVowels("rhythm"), 0);
strictEqual(countVowels("education"), 5);
strictEqual(countVowels(""), 0);
strictEqual(countVowels("aeiou"), 5);

console.log("All tests passed ✅");
