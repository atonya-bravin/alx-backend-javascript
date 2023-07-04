export default function updateStudentGradeByCity(students_information, city, newGrades) {
  return students_information
    .filter((student_information) => student_information.location === city)
    .map((student_information) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student_information.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student_information, grade };
    });
}
