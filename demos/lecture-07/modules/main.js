import { formatStudent, students } from "./data.js";

const result = document.querySelector("#result");
const error = document.querySelector("#error");
if (!result) throw new Error("Thiếu vùng #result trong HTML");
const lines = students.map(formatStudent);
result.textContent = lines.join("\n");
console.log("Module main.js đã chạy", { count: students.length, lines });
if (error) error.textContent = "Đã nạp thành công hai module. Xem Console để kiểm tra object kết quả.";
