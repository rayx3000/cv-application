import React from 'react'
import './Form.css'
import PersonalForm from './PersonalForm.jsx'
import ContactForm from './ContactForm.jsx'
import EducationForm from './EducationForm.jsx'
import WorkForm from './WorkForm.jsx'
import SkillsForm from './SkillsForm.jsx'
import CertificationsForm from './CertificationsForm.jsx'
import LanguagesForm from './LanguagesForm.jsx'
import ReferencesForm from './ReferencesForm.jsx'
import AddInfoForm from './AddInfoForm.jsx'
import UploadImage from './UploadImage.jsx'

const Form = ({ setResumeData, resumeData }) => {
  return (
    <div className="form-container">
        <h1>CV Form</h1>
        <div className="form-content">
            <PersonalForm setResumeData={setResumeData} resumeData={resumeData} />
            <UploadImage setResumeData={setResumeData} resumeData={resumeData} />
            <ContactForm setResumeData={setResumeData} resumeData={resumeData} />
            <EducationForm setResumeData={setResumeData} resumeData={resumeData} />
            <WorkForm setResumeData={setResumeData} resumeData={resumeData} />
            <SkillsForm setResumeData={setResumeData} resumeData={resumeData} />
            <CertificationsForm setResumeData={setResumeData} resumeData={resumeData} />
            <LanguagesForm setResumeData={setResumeData} resumeData={resumeData} />
            <ReferencesForm setResumeData={setResumeData} resumeData={resumeData} />
            <AddInfoForm setResumeData={setResumeData} resumeData={resumeData} />
        </div>
    </div>
  )
}

export default Form