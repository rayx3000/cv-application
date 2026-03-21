import React from 'react'

const PersonalForm = () => {
  return (
    <form>
      <p>Personal Information</p>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='e.g Sofia Santos'/>
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" placeholder='e.g Software Engineer'/>
        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" name="summary" placeholder='Write a brief summary about yourself...'></textarea>
      </fieldset>
    </form> 
  )
}

export default PersonalForm