import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { ListGroup, Button, Form } from "react-bootstrap";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleEdit = (module) => {
    dispatch(setModule(module));
    setEditing(true);
  };

  const handleUpdate = () => {
    dispatch(updateModule(module));
    setEditing(false);
  };

  return (
    <div className="container mt-4">
      <ListGroup>
        <ListGroup.Item>
          <Form.Control
            type="text"
            value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            placeholder="New Module"
          />
          <Form.Control
            as="textarea"
            value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            placeholder="New Description"
          />
          <Button variant="success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </Button>
        </ListGroup.Item>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ListGroup.Item key={index}>
              {editing && module._id === module._id ? (
                <>
                  <Form.Control
                    type="text"
                    value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                  />
                  <Form.Control
                    as="textarea"
                    value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
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
                        onClick={() => handleEdit(module)}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default ModuleList;