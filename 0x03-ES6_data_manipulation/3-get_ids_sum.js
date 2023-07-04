export default function getStudentIdsSum(students_information) {
  return students_information.reduce((sum, student) => sum + student.id, 0);
}
