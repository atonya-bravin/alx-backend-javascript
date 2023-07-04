export default function getListStudentIds(student_information) {
  if (Array.isArray(student_information)) {
    return student_information.map((student_information) => student_information.id);
  }
  return [];
}
