import React from 'react'

const CertificationsForm = () => {
  return (
     <form>
        <p>Certifications</p>
        <div className='saved-container certifications-completed'>
          <div>
            <p><span>AWS Certified Solutions Architect</span>/<span>Amazon Web Services</span></p>
            <div className='saved-options'>
              <i className="fa-solid fa-pen"></i>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
          <div>
            <p><span>Google Certified Professional Cloud Architect</span>/<span>Google Cloud</span></p>
            <div className='saved-options'>
              <i className="fa-solid fa-pen"></i>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
        <fieldset>
          <label htmlFor="certification">Certification Name:</label>
          <input type="text" id="certification" name="certification" placeholder='e.g AWS Certified Solutions Architect' />
          <label htmlFor="issuer">Issuing Organization:</label>
          <input type="text" id="issuer" name="issuer" placeholder='e.g Amazon Web Services' />
          <label htmlFor="date">Date Earned:</label>
          <input type="date" id="date" name="date" />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" placeholder='Type your experience here...'></textarea>
        </fieldset>
        <button id="addCertification" type="button">Add Certification</button>
      </form>
  )
}

export default CertificationsForm