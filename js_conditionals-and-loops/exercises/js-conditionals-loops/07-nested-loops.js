// Exercise 07 — nested loops
// --------------------------
// Implement rectangle(width, height): return a string of '*' characters shaped
// as a filled rectangle. Each row has `width` stars, there are `height` rows,
// and rows are separated by a newline "\n" (no trailing newline at the end).
//
// Example: rectangle(3, 2) returns:
//   "***\n***"
// which prints as:
//   ***
//   ***
//
// If width or height is less than 1, return an empty string "".
// Use one loop for the rows and a nested loop (or repetition) for the columns.

function rectangle(width, height) {
  // 1. เช็คเงื่อนไข ถ้ากว้างหรือสูงน้อยกว่า 1 ให้คืนค่า String ว่างๆ ทันที
  if (width < 1 || height < 1) {
    return "";
  }

  let result = "";

  // 2. ลูปชั้นนอก ควบคุมจำนวน "แถว" (height)
  for (let i = 0; i < height; i++) {
    
    // 3. ลูปชั้นใน ควบคุมการต่อตัวอักษร "*" ในแต่ละแถว (width)
    for (let j = 0; j < width; j++) {
      result += "*";
    }
    
    // 4. เมื่อจบ 1 แถว ให้ขึ้นบรรทัดใหม่ด้วย "\n" 
    // แต่มีข้อแม้ว่า "ต้องไม่ใช่บรรทัดสุดท้าย" เพื่อไม่ให้มี \n เกินมาตอนจบ
    if (i < height - 1) {
      result += "\n";
    }
  }

  return result;
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(rectangle(3, 2), "***\n***");
strictEqual(rectangle(1, 1), "*");
strictEqual(rectangle(4, 3), "****\n****\n****");
strictEqual(rectangle(0, 5), "");
strictEqual(rectangle(2, 0), "");

console.log("All tests passed ✅");
