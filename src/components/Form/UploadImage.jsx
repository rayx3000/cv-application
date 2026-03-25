import React from 'react'

const UploadImage = ({ setResumeData, resumeData }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setResumeData(prevData => ({
        ...prevData,
        image: imageUrl
      }));
    }
  };

  return (
    <form>
      <p>Profile Image</p>
      <fieldset>
        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
      </fieldset>
    </form> 
  )
}

export default UploadImage