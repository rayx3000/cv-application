import React from 'react'

const LanguagesForm = () => {
  return (
    <form>
      <p>Languages</p>
      <div className='saved-container languages-completed'>
        <div>
          <p><span>English</span></p>
          <div className='saved-options'>
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div>
          <p><span>Filipino</span></p>
          <div className='saved-options'>
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div>
          <p><span>Spanish</span></p>
          <div className='saved-options'>
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <fieldset>
        <label htmlFor="language">Language:</label>
        <input type="text" id="language" name="language" placeholder='e.g English, Filipino, Spanish' />
      </fieldset>
      <button id="addLanguage" type="button">Add Language</button>
    </form>
  )
}

export default LanguagesForm