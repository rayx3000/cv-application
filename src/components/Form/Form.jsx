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

const Form = () => {
  return (
    <div className="form-container">
        <h1>CV Form</h1>
        <div className="form-content">
            <PersonalForm />
            <ContactForm />
            <EducationForm />
            <WorkForm />
            <SkillsForm />
            <CertificationsForm />
            <LanguagesForm />
            <ReferencesForm />
            <AddInfoForm />
        </div>
    </div>
  )
}

export default Form