import React from 'react';
import courses from '../Database/courses.json';
import { Link } from "react-router-dom";
import './index.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Dashboard() { 
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
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
                                <h5 className="card-title">{course.name}</h5>
                                <p className="card-text">{course.number}</p>
                                <p className="card-text">
                                    {course.startDate} - {course.endDate}
                                </p>
                                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                                    View Course
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;