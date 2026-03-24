import React from 'react'

const CVSidebar = ({ resumeData }) => {
  if (!resumeData || !resumeData.personalInfo) {
    return null;
  }
  
  const { personalInfo, education, expertise, languages } = resumeData;
  const { name, title, jobTitle, summary, contact } = personalInfo;
  return (
    <div className="cv-sidebar">
        <div className="cv-avatar">
        <span>👤</span>
        </div>

        <div className="cv-header">
        <h2 className="cv-name">{name}</h2>
        <p className="cv-job-title">{title || jobTitle}</p>
        <p className="cv-summary">{summary}</p>
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Contact</h3>
        <p className="cv-contact-label">Phone</p>
        <p className="cv-contact-value">{contact?.phone}</p>
        <p className="cv-contact-label">Email</p>
        <p className="cv-contact-value">{contact?.email}</p>
        <p className="cv-contact-label">Address</p>
        <p className="cv-contact-value">{contact?.address}</p>
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Education</h3>
        {education?.map((edu, i) => (
            <div key={i} className="cv-edu-item">
            <p className="cv-edu-year">{edu.years}</p>
            <p className="cv-edu-degree">{edu.degree}</p>
            <p className="cv-edu-school">{edu.school}</p>
            </div>
        ))}
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Expertise</h3>
        {expertise?.map((skill, i) => (
            <div key={i} className="cv-skill-item">
            <span className="cv-skill-dot" />
            <span>{skill}</span>
            </div>
        ))}
        </div>

        <div className="cv-side-section">
        <h3 className="cv-side-title">Language</h3>
        {languages?.map((lang, i) => (
            <p key={i} className="cv-lang-item">{lang}</p>
        ))}
        </div>
    </div>
  )
}

export default CVSidebar