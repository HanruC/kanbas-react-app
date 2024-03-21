import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button
        className="btn btn-primary"
        onClick={course._id === "0" ? addNewCourse : updateCourse}
      >
        {course._id === "0" ? 'Add' : 'Update'}
      </button>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map(course => (
          <div key={course._id} className="col" style={{ width: 300 }}>
            <div className="card">
              <div className="card-image">
                <BsThreeDotsVertical className="card-icon" style={{ color: 'gray' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/Kanbas/Courses/${course._id}`}>
                    {course.name}
                  </Link>
                  <button
                    className="btn btn-sm btn-secondary ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </h5>
                <p className="card-text">{course.number}</p>
                <p className="card-text">
                  {course.startDate} - {course.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;