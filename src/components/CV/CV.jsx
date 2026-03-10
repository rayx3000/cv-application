import React from 'react'
import './CV.css'

const resumeData = {
  name: "Mariana Anderson",
  title: "Marketing Manager",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu.",
  contact: {
    phone: "123-456-7890",
    email: "hello@reallygreatsite.com",
    address: "123 Anywhere St., Any City",
  },
  education: [
    {
      years: "2020 - 2023",
      degree: "Bachelor of Business Management",
      school: "Borcelle University",
    },
    {
      years: "2012 - 2016",
      degree: "Bachelor of Business Management",
      school: "Borcelle University",
    },
  ],
  expertise: ["UI/UX", "Visual Design", "Wireframes", "Storyboards", "User Flows", "Process Flows"],
  languages: ["English", "Spanish"],
  experience: [
    {
      years: "2022 - 2025",
      company: "Ginyard International Co. | 123 Anywhere St., Any City",
      role: "Marketing Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim.",
    },
    {
      years: "2020 - 2022",
      company: "Ginyard International Co. | 123 Anywhere St., Any City",
      role: "Inside Sales Representative",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim.",
    },
    {
      years: "2018 - 2020",
      company: "Ginyard International Co. | 123 Anywhere St., Any City",
      role: "Inside Sales Representative",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim.",
    },
  ],
  references: [
    {
      name: "Harumi Kobayashi",
      company: "Wardiere Inc. / CEO",
      phone: "123-456-7890",
      email: "hello@reallygreatsite.com",
    },
    {
      name: "Bailey Dupont",
      company: "Wardiere Inc. / CEO",
      phone: "123-456-7890",
      email: "hello@reallygreatsite.com",
    },
  ],
}

const CV = () => {
  return (
    <div className="cv-container">
      <h1>CV Preview</h1>
      <div className="cv-content">

        {/* LEFT SIDEBAR */}
        <div className="cv-sidebar">
          <div className="cv-avatar">
            <span>👤</span>
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

        {/* RIGHT MAIN CONTENT */}
        <div className="cv-main">
          <div className="cv-header">
            <h2 className="cv-name">{resumeData.name}</h2>
            <p className="cv-job-title">{resumeData.title}</p>
            <p className="cv-summary">{resumeData.summary}</p>
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Experience</h3>
            <div className="cv-section-divider" />
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="cv-exp-item">
                <div className="cv-exp-timeline">
                  <div className="cv-exp-dot" />
                  {i < resumeData.experience.length - 1 && <div className="cv-exp-line" />}
                </div>
                <div className="cv-exp-content">
                  <p className="cv-exp-years">{exp.years}</p>
                  <p className="cv-exp-company">{exp.company}</p>
                  <p className="cv-exp-role">{exp.role}</p>
                  <p className="cv-exp-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Reference</h3>
            <div className="cv-section-divider" />
            <div className="cv-ref-grid">
              {resumeData.references.map((ref, i) => (
                <div key={i} className="cv-ref-item">
                  <p className="cv-ref-name">{ref.name}</p>
                  <p className="cv-ref-company">{ref.company}</p>
                  <div className="cv-ref-detail">
                    <span className="cv-ref-label">Phone:</span>
                    <span>{ref.phone}</span>
                  </div>
                  <div className="cv-ref-detail">
                    <span className="cv-ref-label">Email :</span>
                    <span>{ref.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CV