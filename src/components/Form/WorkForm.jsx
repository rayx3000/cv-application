import React from 'react'

const WorkForm = () => {
  return (
    <form>
      <p>Work Experience</p>
      <div className='saved-container work-completed'>
        <div>
          <p><span>Open AI</span>/<span>Software Engineer</span></p>
        <div className='saved-options'>
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <fieldset>
        <label htmlFor="company">Company Name:</label>
        <input type="text" id="company" name="company" placeholder='e.g. Open AI'/>
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" placeholder='e.g. Software Engineer'/>
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" />
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate" />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" placeholder='Type your experience here...'></textarea>
      </fieldset>
      <button id="addExperience" type="button">Add Experience</button>
    </form>
  )
}

export default WorkForm