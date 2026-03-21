import React from 'react'

const EducationForm = () => {
  return (
    <form>
      <p>Education Background</p>
      <div className='saved-container education-completed'>
        <div>
          <p><span>Ateneo De Manila University</span>/<span>Bachelor of Science in Computer Science</span></p>
          <div className='saved-options'>
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div>
          <p><span>University of The Philippines</span>/<span>Bachelor of Arts in Politcal Science</span></p>
          <div className='saved-options'>
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <fieldset>
        <label htmlFor="school">School Name:</label>
        <input type="text" id="school" name="school" placeholder='University Of Philippines'/>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" placeholder='e.g Bachelor of Science'/>
        <label htmlFor="field">Field of Study:</label>
        <input type="text" id="field" name="field" placeholder='e.g Computer Science'/>
        <label htmlFor="startYear">Start:</label>
        <input type="date" id="startYear" name="startYear" />
        <label htmlFor="endYear">Graduate Year:</label>
        <input type="date" id="endYear" name="endYear" />
      </fieldset>
      <button id="addEducation" type="button">Add Education</button>            
    </form>
  )
}

export default EducationForm