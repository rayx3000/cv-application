import React from 'react'

const SkillsForm = () => {
  return (
    <form>
      <p>Skills</p>
      <div className='saved-container skills-container'>
        <div className='skills'>
          <p>JavaScript</p>
          <div className='saved-options'>
            <i className="className-solid fa-pen"></i>
            <i className="className-solid fa-trash-can"></i>
          </div>
        </div>
        <div className='skills'>
          <p>HTML/CSS</p>
          <div className='saved-options'>
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div className='skills'>
          <p>Graphic Design</p>
          <div className='saved-options'>
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <fieldset>
        <label htmlFor="skill">Skill:</label>
        <input type="text" id="skill" name="skill" placeholder="e.g., JavaScript, React, Node.js" />
      </fieldset>
      <button id="addSkill" type="button">Add Skill</button>
    </form>
  )
}

export default SkillsForm