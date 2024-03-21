import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
} from "./reducer";
import { ListGroup, Button, Form } from "react-bootstrap";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const dispatch = useDispatch();
  const [newModule, setNewModule] = useState({
    name: "",
    description: "",
    course: courseId,
  });

  const handleAddModule = () => {
    dispatch(addModule(newModule));
    setNewModule({
      name: "",
      description: "",
      course: courseId,
    });
  };

  return (
    <div className="container mt-4">
      <ListGroup>
        <ListGroup.Item>
          <Form.Control
            type="text"
            value={newModule.name}
            onChange={(e) => setNewModule({ ...newModule, name: e.target.value })}
            placeholder="New Module"
          />
          <Form.Control
            as="textarea"
            value={newModule.description}
            onChange={(e) => setNewModule({ ...newModule, description: e.target.value })}
            placeholder="New Description"
          />
          <Button variant="success" onClick={handleAddModule}>
            Add
          </Button>
        </ListGroup.Item>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ListGroup.Item key={index}>
              <ModuleItem module={module} />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

function ModuleItem({ module }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updatedModule, setUpdatedModule] = useState(module);

  const handleUpdate = () => {
    dispatch(updateModule(updatedModule));
    setEditing(false);
  };

  return (
    <>
      {editing ? (
        <>
          <Form.Control
            type="text"
            value={updatedModule.name}
            onChange={(e) => setUpdatedModule({ ...updatedModule, name: e.target.value })}
          />
          <Form.Control
            as="textarea"
            value={updatedModule.description}
            onChange={(e) => setUpdatedModule({ ...updatedModule, description: e.target.value })}
          />
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div>{module.name}</div>
              <div>{module.description}</div>
              <div>{module._id}</div>
            </div>
            <div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => dispatch(deleteModule(module._id))}
                className="me-2"
              >
                Delete
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setEditing(true)}
              >
                Update
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ModuleList;