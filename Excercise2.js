const students = [
  { name: "Sara",  grades: [80, 90, 70],  enrolled: true  },
  { name: "Ali",   grades: [50, 60, 55],  enrolled: false },
  { name: "Lena",  grades: [95, 100, 90], enrolled: true  },
  { name: "Omar",  grades: [40, 30, 20],  enrolled: true  },
  { name: "Nour",  grades: [75, 85, 80],  enrolled: false },
];


// Get an array of all grades from all students in one flat array.
const Grades = students.flatMap((student)=>student.grades)
console.log(Grades)
// Get only the students who are enrolled.
const enrolled = students.filter((student)=>student.enrolled);
console.log(enrolled)
// For each enrolled student, calculate their average grade and return an array of objects like:
// { name: "Sara", average: 80 }
// stop here

// From those, keep only students whose average is 70 or above.
// Chain exercises 2 → 3 → 4 in one expression and sort the result from highest to lowest average.


// Bonus — use reduce for the average calculation in exercise 3 instead of doing grades[0] + grades[1]... manually.