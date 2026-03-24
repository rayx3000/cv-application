import React from 'react'

const ReferencesForm = () => {
  return (
     <form>
        <p>References</p>
        <div className='saved-container references-completed'>
          <div>
            <p><span>John Doe</span>/<span>Open AI</span></p>
            <div className='saved-options'>
              <i className="fa-solid fa-pen"></i>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
        <fieldset>
          <label htmlFor="referenceName">Reference Name:</label>
          <input type="text" id="referenceName" name="referenceName" placeholder='e.g. Jane Smith' />
          <label htmlFor="referenceContact">Reference Contact:</label>
          <input type="text" id="referenceContact" name="referenceContact" placeholder='e.g. 123-456-7890' />
          <label htmlFor="referenceEmail">Reference Email:</label>
          <input type="email" id="referenceEmail" name="referenceEmail" placeholder='e.g. janesmith@example.com' />
          <label htmlFor='referenceWork'>Reference Work:</label>
          <input type="text" id="referenceWork" name="referenceWork" placeholder='e.g. Software Engineer' />
        </fieldset>
        <button id="addReference" type="button">Add Reference</button>
      </form>  
  )
}

export default ReferencesForm