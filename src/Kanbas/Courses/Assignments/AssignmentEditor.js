import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import database from "../../Database";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = database.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  
  // State to manage the assignment title for editing
  const [assignmentTitle, setAssignmentTitle] = useState(assignment?.title);

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h2>Assignment Name</h2>
      <input 
        value={assignmentTitle}
        onChange={(e) => setAssignmentTitle(e.target.value)}
        className="form-control mb-2"
        style={{ width: '100%', maxWidth: '600px' }} 
      />
      <div className="d-flex justify-content-end mb-2">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-outline-danger me-2">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;