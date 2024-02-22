import React from "react";
import database from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from 'react-icons/hi2';
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";

function Header({ courseName }) {
    return (
        <header className="course-header">
            <HiMiniBars3 className="menu-icon" />
            <span>{courseName}</span>
        </header>
    );
}

function Courses() {
    const { courseId } = useParams();
    const course = database.courses.find((course) => course._id === courseId);

    return (
        <div className="d-flex row flex-fill">
            <Header courseName={course?.name} />
            <CourseNavigation />
            <div className="content-area">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId"
                        element={<AssignmentEditor />}
                    />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    );
}

export default Courses;