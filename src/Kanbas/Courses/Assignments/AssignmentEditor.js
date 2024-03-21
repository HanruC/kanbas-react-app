import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";
import { Button, Form } from "react-bootstrap";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const selectedAssignment = useSelector((state) => state.assignmentsReducer.assignment);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  useEffect(() => {
    if (assignmentId !== "new") {
      const assignment = assignments.find((a) => a._id === assignmentId);
      if (assignment) {
        dispatch(selectAssignment(assignment));
      }
    } else {
      dispatch(selectAssignment({}));
    }
  }, [assignmentId, assignments, dispatch]);

  useEffect(() => {
    setFormData({
      title: selectedAssignment.title || "",
      description: selectedAssignment.description || "",
      points: selectedAssignment.points || 0,
      dueDate: selectedAssignment.dueDate || "",
      availableFromDate: selectedAssignment.availableFromDate || "",
      availableUntilDate: selectedAssignment.availableUntilDate || "",
    });
  }, [selectedAssignment]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (assignmentId === "new") {
      dispatch(addAssignment({ ...formData, course: courseId }));
    } else {
      dispatch(updateAssignment({ ...selectedAssignment, ...formData }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="container mt-5">
      <h2>{assignmentId === "new" ? "New Assignment" : "Edit Assignment"}</h2>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="points">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            name="points"
            value={formData.points}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="dueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="availableFromDate">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="date"
            name="availableFromDate"
            value={formData.availableFromDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="availableUntilDate">
          <Form.Label>Available Until</Form.Label>
          <Form.Control
            type="date"
            name="availableUntilDate"
            value={formData.availableUntilDate}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-end mt-3">
          <Button
            variant="secondary"
            onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments`)}
            className="me-2"
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AssignmentEditor;