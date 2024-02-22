import React from "react";
import { Link, useParams } from "react-router-dom";
import database from "../../Database";


function Assignments() {
    const { courseId } = useParams();
    const assignments = database.assignments;
    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId
    );
  
    return (
      <div className="list-group mt-5 col-12" style={{ width: '900px' }}>
        <div className="list-group-item list-group-item-action list-group-item-secondary">
          Assignments for course {courseId}
        </div>
        <div className="collapse show">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item list-group-item-action with-border">
  
              <div className="content-text">
                {assignment.title}
                <div className="sub-text">{assignment.description}</div>
              </div>
  
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default Assignments;
  