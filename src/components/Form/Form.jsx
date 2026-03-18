import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className="form-container">
        <h1>CV Form</h1>
        <div className="form-content">
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
            <form>
              <p>Contact</p>
              <fieldset>
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
            </form>
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
            <form>
              <p>Work Experience</p>
              <div className='saved-container work-completed'>
                <div>
                  <p><span>Open AI</span>/<span>Software Engineer</span></p>
                <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
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
            <form>
              <p>Skills</p>
              <div className='saved-container skills-container'>
                <div className='skills'>
                  <p>JavaScript</p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
                <div className='skills'>
                  <p>HTML/CSS</p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
                <div className='skills'>
                  <p>Graphic Design</p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
              </div>
              <fieldset>
                <label htmlFor="skill">Skill:</label>
                <input type="text" id="skill" name="skill" placeholder="e.g., JavaScript, React, Node.js" />
              </fieldset>
              <button id="addSkill" type="button">Add Skill</button>
            </form>
            <form>
              <p>Certifications</p>
              <div className='saved-container certifications-completed'>
                <div>
                  <p><span>AWS Certified Solutions Architect</span>/<span>Amazon Web Services</span></p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
                <div>
                  <p><span>Google Certified Professional Cloud Architect</span>/<span>Google Cloud</span></p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
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
            <form>
              <p>Languages</p>
              <div className='saved-container languages-completed'>
                <div>
                  <p><span>English</span></p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
                <div>
                  <p><span>Filipino</span></p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
                <div>
                  <p><span>Spanish</span></p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
              </div>
              <fieldset>
                <label htmlFor="language">Language:</label>
                <input type="text" id="language" name="language" placeholder='e.g English, Filipino, Spanish' />
              </fieldset>
              <button id="addLanguage" type="button">Add Language</button>
            </form>
            <form>
              <p>References</p>
              <div className='saved-container references-completed'>
                <div>
                  <p><span>John Doe</span>/<span>Open AI</span></p>
                  <div className='saved-options'>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
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
            <form>
              <p>Additional Information</p>
              <fieldset>
                <label htmlFor="linkedin">LinkedIn Profile:</label>
                <input type="url" id="linkedin" name="linkedin" placeholder='e.g. https://www.linkedin.com/in/janesmith' />
                <label htmlFor="github">GitHub Profile:</label>
                <input type="url" id="github" name="github" placeholder='e.g. https://github.com/janesmith' />
                <label htmlFor="portfolio">Portfolio Website:</label>
                <input type="url" id="portfolio" name="portfolio" placeholder='e.g. https://janesmith.dev' />
              </fieldset>
            </form>
        </div>
    </div>
  )
}

export default Form