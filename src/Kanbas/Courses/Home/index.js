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
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className="col-lg-4 col-md-6 d-none d-md-block">

                <h2>Status</h2>
                <div className="course-status">
                    <h5>Course Status</h5>
                    
                    <div>
                        <button type="button" className="btn btn-secondary mb-1 btn-left-content" style={{ width: '250px' }}>
                            <LiaFileImportSolid className="wd-icon" /> Import Existing Content
                        </button>
                        <button type="button" className="btn btn-secondary mb-1 btn-left-content" style={{ width: '250px' }}>
                            <CiImport className="wd-icon"/> Import from Commons
                        </button>
                        <button type="button" className="btn btn-secondary mb-1 btn-left-content" style={{ width: '250px' }}>
                            <BiTargetLock className="wd-icon"/> Choose Home Page
                        </button>
                        <button type="button" className="btn btn-secondary mb-1 btn-left-content" style={{ width: '250px' }}>
                            <BsGraphUp className="wd-icon" /> View Course Stream
                        </button>
                        
                        <button type="button" className="btn btn-secondary mb-1 btn-left-content" style={{ width: '250px' }}>
                            <PiSpeakerHighDuotone className="wd-icon"/> New Announcement
                        </button>
                        <button type="button" className="btn btn-secondary mb-1 btn-left-content" style={{ width: '250px' }}>
                            <BsGraphUp className="wd-icon"/> New Analytics
                        </button>
                        <button type="button" className="btn btn-secondary mb-1 btn-left-content" style={{ width: '250px' }}>
                            <BiSolidBellRing className="wd-icon"/> View Course Notifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;