import React from 'react'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm