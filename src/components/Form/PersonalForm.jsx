import React from 'react'

const PersonalForm = ({ setResumeData, resumeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form>
      <p>Personal Information</p>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" minLength="2" maxLength="30" placeholder='e.g Sofia Santos' value={resumeData?.name || ''} onChange={handleChange}/>
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="title" minLength="2" maxLength="30" placeholder='e.g Software Engineer' value={resumeData?.title || ''} onChange={handleChange}/>
        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" name="summary" minLength="2" maxLength="200" placeholder='Write a brief summary about yourself...' value={resumeData?.summary || ''} onChange={handleChange}></textarea>
      </fieldset>
    </form> 
  )
}

export default PersonalForm