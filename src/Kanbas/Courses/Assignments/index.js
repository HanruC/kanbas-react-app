import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import { Button, ListGroup } from "react-bootstrap";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) =>
    state.assignmentsReducer.assignments.filter(
      (assignment) => assignment.course === courseId
    )
  );
  const dispatch = useDispatch();

  const handleDelete = (assignmentId) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <ListGroup>
            <ListGroup.Item variant="secondary">
              Assignments for course {courseId}
            </ListGroup.Item>
            {assignments.map((assignment) => (
              <ListGroup.Item
                key={assignment._id}
                className="d-flex justify-content-between align-items-center"
              >
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(assignment._id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments/new`}
            className="btn btn-primary mt-3"
          >
            + Assignment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Assignments;