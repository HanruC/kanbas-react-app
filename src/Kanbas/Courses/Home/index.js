import React from 'react';
import ModuleList from "../Modules/List";
import { LiaFileImportSolid } from "react-icons/lia"
import { CiImport } from "react-icons/ci"
import { BiTargetLock } from "react-icons/bi"
import { BsGraphUp } from "react-icons/bs"
import { PiSpeakerHighDuotone } from "react-icons/pi"
import { BiSolidBellRing } from "react-icons/bi"
import "./index.css"

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Module List */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h2>Home</h2>
                    <ModuleList />
                </div>
                {/* Course Status */}
                <div className="col-lg-4 col-md-6 d-none d-lg-block">
                    <div className="status-container">
                        <h2>Status</h2>
                        <div className="course-status">
                            <h5>Course Status</h5>
                            <Button icon={<LiaFileImportSolid />} text="Import Existing Content" />
                            <Button icon={<CiImport />} text="Import from Commons" />
                            <Button icon={<BiTargetLock />} text="Choose Home Page" />
                            <Button icon={<BsGraphUp />} text="View Course Stream" />
                            <Button icon={<PiSpeakerHighDuotone />} text="New Announcement" />
                            <Button icon={<BsGraphUp />} text="New Analytics" />
                            <Button icon={<BiSolidBellRing />} text="View Course Notifications" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Button({ icon, text }) {
    return (
        <button type="button" className="btn btn-secondary mb-1 btn-status">
            {icon}
            <span className="button-text">{text}</span>
        </button>
    );
}

export default Home;