// Exercise 05 — while loop
// ------------------------
// Implement countDigits(n): return how many digits are in the whole number n.
// Treat n as its absolute value (ignore a minus sign). For example:
//   countDigits(7)     -> 1
//   countDigits(100)   -> 3
//   countDigits(-4520) -> 4
//   countDigits(0)     -> 1   (zero counts as one digit)
//
// Use a while loop. Hint: repeatedly divide by 10 (Math.floor(n / 10)) and
// count how many times you can do that before reaching 0.

function countDigits(n) {
  // แปลงค่าให้เป็นค่าสัมบูรณ์ (Absolute) เพื่อตัดเครื่องหมายลบทิ้ง
  n = Math.abs(n);
  // จัดการกรณีพิเศษ: ถ้าตัวเลขคือ 0 ให้นับเป็น 1 หลัก (ตามที่โจทย์ระบุ)
  if (n === 0) {
    return 1;
  }
  // สร้างตัวแปรสำหรับ "นับจำนวนหลัก" เริ่มต้นที่ 0
  let count = 0;
  // วนลูปตราบใดที่ n ยังมีค่ามากกว่า 0
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  // ส่งค่าจำนวนหลักที่นับได้กลับไป
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
