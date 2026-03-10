import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className="form-container">
        <h1>CV Form</h1>
        <form>
            <fieldset>
                <legend>Personal Information</legend>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder='e.g Sofia Santos'/>
                <label htmlFor="jobTitle">Job Title:</label>
                <input type="text" id="jobTitle" name="jobTitle" placeholder='e.g Software Engineer'/>
                <label htmlFor="summary">Summary:</label>
                <textarea id="summary" name="summary" placeholder='Write a brief summary about yourself...'></textarea>
            </fieldset> 
            <fieldset>
              <legend>Contact</legend>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='e.g iloveyou143@gmail.com' />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder='e.g +639123456789' />
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" placeholder='e.g 123 Main Street'/>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" placeholder='e.g Manila'/>
                <label htmlFor="state">State/Province:</label>
                <input type="text" id="state" name="state" placeholder='e.g Metro Manila'/>
                <label htmlFor="zip">Zip/Postal Code:</label>
                <input type="text" id="zip" name="zip" placeholder="e.g. 1000"/>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" placeholder='e.g Philippines'/>
            </fieldset>
            <fieldset>
              <legend>Education Background</legend>
              <label htmlFor="school">School Name:</label>
              <input type="text" id="school" name="school"/>
              <label htmlFor="degree">Degree:</label>
              <input type="text" id="degree" name="degree" />
              <label htmlFor="field">Field of Study:</label>
              <input type="text" id="field" name="field" />
              <label htmlFor="startYear">Start:</label>
              <input type="date" id="startYear" name="startYear" />
              <label htmlFor="endYear">Graduate Year:</label>
              <input type="date" id="endYear" name="endYear" />
              <button id="addEducation" type="button">Add Education</button>
            </fieldset>
            <fieldset>
              <legend>Work Experience</legend>
              <label htmlFor="company">Company Name:</label>
              <input type="text" id="company" name="company" />
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" />
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate" name="startDate" />
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate" name="endDate" />
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description"></textarea>
              <button id="addExperience" type="button">Add Experience</button>
            </fieldset>
            <fieldset>
              <legend>Skills</legend>
              <label htmlFor="skills">List your skills:</label>
              <input type="text" id="skills" name="skills" placeholder="e.g., JavaScript, React, Node.js" />
              <button id="addSkill" type="button">Add Skill</button>
            </fieldset>
            <fieldset>
              <legend>Certifications</legend>
              <label htmlFor="certification">Certification Name:</label>
              <input type="text" id="certification" name="certification" />
              <label htmlFor="issuer">Issuing Organization:</label>
              <input type="text" id="issuer" name="issuer" />
              <label htmlFor="date">Date Obtained:</label>
              <input type="date" id="date" name="date" />
              <button id="addCertification" type="button">Add Certification</button>
            </fieldset>
            <fieldset>
              <legend>Languages</legend>
              <label htmlFor="language">Language:</label>
              <input type="text" id="language" name="language" placeholder='e.g English, Filipino, Spanish' />
              <button id="addLanguage" type="button">Add Language</button>
            </fieldset>
            <fieldset>
              <legend>References</legend>
              <label htmlFor="referenceName">Reference Name:</label>
              <input type="text" id="referenceName" name="referenceName" />
              <label htmlFor="referenceContact">Reference Contact:</label>
              <input type="text" id="referenceContact" name="referenceContact" />
              <label htmlFor="referenceEmail">Reference Email:</label>
              <input type="email" id="referenceEmail" name="referenceEmail" />
              <label htmlFor='referenceWork'>Reference Work:</label>
              <input type="text" id="referenceWork" name="referenceWork" />
              <button id="addReference" type="button">Add Reference</button>
            </fieldset>          
            <fieldset>
              <legend>Additional Information</legend>
              <label htmlFor="linkedin">LinkedIn Profile:</label>
              <input type="url" id="linkedin" name="linkedin" />
              <label htmlFor="github">GitHub Profile:</label>
              <input type="url" id="github" name="github" />
              <label htmlFor="portfolio">Portfolio Website:</label>
              <input type="url" id="portfolio" name="portfolio" />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form