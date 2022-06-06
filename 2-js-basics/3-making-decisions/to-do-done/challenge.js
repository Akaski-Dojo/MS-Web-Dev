let allStudents = ['A', 'B-', 1, 4, 5, 2]
  
let studentsWhoPass = [];

for (let pass = 0; pass < allStudents.length; pass++) {
    if (allStudents[pass] == 'A' || allStudents[pass] == 'A-' || allStudents[pass] == 'B' || allStudents[pass] == 'B-' || allStudents[pass] == 'C' || allStudents[pass] > 2) {
        studentsWhoPass.push(allStudents[pass]);
    }
}

console.log("Los estudiantes con la siguiente calificación pasarón: " + studentsWhoPass);
