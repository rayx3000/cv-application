import React from 'react'
import { resumeData } from './ResumeData.js';

const CVSidebar = () => {
  return (
    <div className="cv-sidebar">
        <div className="cv-avatar">
        <span>👤</span>
        </div>

        <div className="cv-header">
        <h2 className="cv-name">{resumeData.name}</h2>
        <p className="cv-job-title">{resumeData.title}</p>
        <p className="cv-summary">{resumeData.summary}</p>
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Contact</h3>
        <p className="cv-contact-label">Phone</p>
        <p className="cv-contact-value">{resumeData.contact.phone}</p>
        <p className="cv-contact-label">Email</p>
        <p className="cv-contact-value">{resumeData.contact.email}</p>
        <p className="cv-contact-label">Address</p>
        <p className="cv-contact-value">{resumeData.contact.address}</p>
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Education</h3>
        {resumeData.education.map((edu, i) => (
            <div key={i} className="cv-edu-item">
            <p className="cv-edu-year">{edu.years}</p>
            <p className="cv-edu-degree">{edu.degree}</p>
            <p className="cv-edu-school">{edu.school}</p>
            </div>
        ))}
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Expertise</h3>
        {resumeData.expertise.map((skill, i) => (
            <div key={i} className="cv-skill-item">
            <span className="cv-skill-dot" />
            <span>{skill}</span>
            </div>
        ))}
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Language</h3>
        {resumeData.languages.map((lang, i) => (
            <p key={i} className="cv-lang-item">{lang}</p>
        ))}
        </div>
    </div>
  )
}

export default CVSidebar