import { students } from "../../data";
import StudentList from "../../Components/StudentList";
import './Students.css';

export default function Students() {
  return (
    <div className="page students">
      <h1>Students</h1>
      <StudentList students={students} />
    </div>
  );
}

  
  