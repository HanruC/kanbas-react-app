import React, { useState } from 'react';
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import KanbasNavigation from "./Navigation";
import { Route, Routes, Navigate } from "react-router";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { addModules } from "./Courses/Modules/reducer";

function KanbasContent() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });

  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString()
    };
    setCourses([...courses, { ...course, ...newCourse }]);
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    });

    // Initialize default modules for the new course
    const defaultModules = [
      {
        _id: new Date().getTime().toString(),
        name: "Introduction",
        description: "This is the introduction module.",
        course: newCourse._id,
      },
      {
        _id: new Date().getTime().toString(),
        name: "Getting Started",
        description: "This module covers the basics.",
        course: newCourse._id,
      },
    ];

    // Dispatch an action to add the default modules to the Redux store
    dispatch(addModules(defaultModules));
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    });
  };

  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}

function Kanbas() {
  return (
    <Provider store={store}>
      <KanbasContent />
    </Provider>
  );
}

export default Kanbas;