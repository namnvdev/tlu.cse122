export const students = [
  { name: "An", score: 8.5 },
  { name: "Bình", score: 7 }
];

export function formatStudent(student) {
  return `${student.name}: ${student.score}`;
}
