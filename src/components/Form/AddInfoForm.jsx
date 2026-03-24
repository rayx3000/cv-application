import React from 'react'

const AddInfoForm = ({ setResumeData, resumeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      additionalInfo: {
        ...prevData.additionalInfo,
        [name]: value
      }
    }));
  };

  return (
    <form>
      <p>Additional Information</p>
      <fieldset>
        <label htmlFor="linkedin">LinkedIn Profile:</label>
        <input type="url" id="linkedin" name="linkedin" placeholder='https://www.linkedin.com/in/yourname' value={resumeData?.additionalInfo?.linkedin || ''} onChange={handleChange} />
        <label htmlFor="github">GitHub Profile:</label>
        <input type="url" id="github" name="github" placeholder='https://github.com/yourname' value={resumeData?.additionalInfo?.github || ''} onChange={handleChange} />
        <label htmlFor="portfolio">Portfolio Website:</label>
        <input type="url" id="portfolio" name="portfolio" placeholder='https://yourportfolio.com' value={resumeData?.additionalInfo?.portfolio || ''} onChange={handleChange} />
      </fieldset>
    </form>
  )
}

export default AddInfoForm