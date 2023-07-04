export default function getStudentsByLocation(students_information, city) {
  return students_information.filter((student_information) => student_information.location === city);
}
