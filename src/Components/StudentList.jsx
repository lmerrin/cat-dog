
function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Ethnicity: {student.ethnicity}</p>
    </div>
  );
}

export default function StudentList({ students }) {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
}