import React from 'react';

const CVSidebar = ({ resumeData }) => {
  if (!resumeData) {
    return null;
  }
  
  const { 
    name, 
    title, 
    jobTitle, 
    summary, 
    contact, 
    expertise, 
    languages, 
    additionalInfo 
  } = resumeData;

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

      {additionalInfo && (additionalInfo.linkedin || additionalInfo.github || additionalInfo.portfolio) && (
        <div className="cv-side-section">
          <h3 className="cv-side-title">Links</h3>
          {additionalInfo.linkedin && (
            <>
              <p className="cv-link-label">LinkedIn</p>
              <a href={additionalInfo.linkedin} className="cv-link-value" target="_blank" rel="noopener noreferrer">
                {additionalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </>
          )}
          {additionalInfo.github && (
            <>
              <p className="cv-link-label">GitHub</p>
              <a href={additionalInfo.github} className="cv-link-value" target="_blank" rel="noopener noreferrer">
                {additionalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </>
          )}
          {additionalInfo.portfolio && (
            <>
              <p className="cv-link-label">Portfolio</p>
              <a href={additionalInfo.portfolio} className="cv-link-value" target="_blank" rel="noopener noreferrer">
                {additionalInfo.portfolio.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </>
          )}
        </div>
      )}

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
        <h3 className="cv-side-title">Expertise</h3>
        <div className="cv-expertise-list">
          {expertise?.map((skill, i) => (
            <div key={i} className="cv-skill-item">
            <span className="cv-skill-dot" />
            <span>{skill}</span>
            </div>
          ))}
        </div>
      </div> 

      <div className="cv-side-section">
        <h3 className="cv-side-title">Language</h3>
        <div className="cv-language-list">
          {languages?.map((lang, i) => (
            <p key={i} className="cv-lang-item">{lang}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVSidebar;