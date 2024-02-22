import React from "react";
import { Link, useParams } from "react-router-dom";
import database from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Assignments() {
  const { courseId } = useParams();
  const assignments = database.assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <div className="list-group">
            <div className="list-group-item list-group-item-action list-group-item-secondary">
              Assignments for course {courseId}
            </div>
            {assignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item list-group-item-action">
                {assignment.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
