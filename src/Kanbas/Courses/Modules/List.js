import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import database from "../../Database";

function ModuleList() {
    const { courseId } = useParams();
    const modules = database.modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modules[0]);

    return (
      <div className="list-group mt-5 col-lg-10 col-md-6 col-sm-12">
        {modules.map((module, index) => (
          <div key={index} className="list-group-item">
            <a 
              className="list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between align-items-center"
              onClick={() => setSelectedModule(module)}
            >
              {module.name}
              <span>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </a>
            {selectedModule._id === module._id && (
              <div className="collapse show">
                <ul className="list-group">
                  {module.lessons?.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="list-group-item">
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

export default ModuleList;