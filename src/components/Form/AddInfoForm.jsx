import React from 'react'

const AddInfoForm = () => {
  return (
    <form>
      <p>Additional Information</p>
      <fieldset>
        <label htmlFor="linkedin">LinkedIn Profile:</label>
        <input type="url" id="linkedin" name="linkedin" />
        <label htmlFor="github">GitHub Profile:</label>
        <input type="url" id="github" name="github" />
        <label htmlFor="portfolio">Portfolio Website:</label>
        <input type="url" id="portfolio" name="portfolio" />
      </fieldset>
    </form>
  )
}

export default AddInfoForm