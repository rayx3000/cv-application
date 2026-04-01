import React from 'react'

const ContactForm = ({ setResumeData, resumeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value
      }
    }));
  };

  return (
    <form>
      <p>Contact</p>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" minLength="2" maxLength="50" placeholder='e.g iloveyou143@gmail.com' value={resumeData?.contact?.email || ''} onChange={handleChange} />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" minLength="2" maxLength="20" placeholder='e.g +639123456789' value={resumeData?.contact?.phone || ''} onChange={handleChange} />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" minLength="2" maxLength="50" placeholder='e.g 123 Main Street' value={resumeData?.contact?.address || ''} onChange={handleChange}/>
      </fieldset>
    </form>
  )
}

export default ContactForm