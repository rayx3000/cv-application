import React from 'react'

const CVMain = ({ resumeData }) => {
  if (!resumeData) {
    return null;
  }
  
  const { education, certifications, experience, references } = resumeData;
  return (
    <div className="cv-main">
          
          {/* Education Section */}
          <div className="cv-section">
            <h3 className="cv-section-title">Education</h3>
            <div className="cv-section-divider" />
            {education?.map((edu, i) => (
              <div key={i} className="cv-edu-item">
                <div className="cv-edu-timeline">
                  <div className="cv-edu-dot" />
                  {i < education.length - 1 && <div className="cv-edu-line" />}
                </div>
                <div className="cv-edu-content">
                  <p className="cv-edu-years">{edu.years || `${edu.startYear || ''} ${edu.startYear && edu.endYear ? '-' : ''} ${edu.endYear || ''}`.trim()}</p>
                  <p className="cv-edu-degree">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</p>
                  <p className="cv-edu-school">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="cv-section">
            <h3 className="cv-section-title">Certifications</h3>
            <div className="cv-section-divider" />
            <div className="cv-cert-grid">
              {certifications?.map((cert, i) => (
                <div key={i} className='cv-cert-item'>
                  <div className='cv-cert-timeline'>
                    <div className="cv-cert-dot" />
                    {i < certifications.length - 1 && <div className="cv-cert-line" />}
                  </div>
                  <div className='cv-cert-content'>
                    <p className='cv-cert-date'>{cert.date}</p>
                    <p className="cv-cert-name">{cert.name}</p>
                    <p className="cv-cert-company">{cert.company}</p>
                    <p className='cv-cert-desc'>{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="cv-section">
            <h3 className="cv-section-title">Experience</h3>
            <div className="cv-section-divider" />
            {experience?.map((exp, i) => (
              <div key={i} className="cv-exp-item">
                <div className="cv-exp-timeline">
                  <div className="cv-exp-dot" />
                  {i < experience.length - 1 && <div className="cv-exp-line" />}
                </div>
                <div className="cv-exp-content">
                  <p className="cv-exp-years">{exp.years || `${exp.startDate || ''} ${exp.startDate && exp.endDate ? '-' : ''} ${exp.endDate || ''}`.trim()}</p>
                  <p className="cv-exp-company">{exp.company}</p>
                  <p className="cv-exp-role">{exp.role}</p>
                  <p className="cv-exp-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reference Section */}
          <div className="cv-section">
            <h3 className="cv-section-title">Reference</h3>
            <div className="cv-section-divider" />
            <div className="cv-ref-grid">
              {references?.map((ref, i) => (
                <div key={i} className="cv-ref-item">
                  <p className="cv-ref-name">{ref.name}</p>
                  <p className="cv-ref-company">{ref.company}</p>
                  <div className="cv-ref-detail">
                    <span className="cv-ref-label">Phone: </span>
                    <span>{ref.phone}</span>
                  </div>
                  <div className="cv-ref-detail">
                    <span className="cv-ref-label">Email: </span>
                    <span>{ref.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div> 
  )
}

export default CVMain