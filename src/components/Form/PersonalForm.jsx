import React from 'react'

const PersonalForm = ({ setResumeData, resumeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value
      }
    }));
  };

  return (
    <form>
      <p>Personal Information</p>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='e.g Sofia Santos' value={resumeData?.personalInfo?.name || ''} onChange={handleChange}/>
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" placeholder='e.g Software Engineer' value={resumeData?.personalInfo?.jobTitle || ''} onChange={handleChange}/>
        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" name="summary" placeholder='Write a brief summary about yourself...' value={resumeData?.personalInfo?.summary || ''} onChange={handleChange}></textarea>
      </fieldset>
    </form> 
  )
}

export default PersonalForm