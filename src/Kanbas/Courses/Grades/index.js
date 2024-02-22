import database from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = database.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = database.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th key={assignment._id}>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = database.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = database.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                     return (<td key={assignment._id}>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;