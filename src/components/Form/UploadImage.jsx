import React from 'react'

const UploadImage = ({ setResumeData, resumeData }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData((prevData) => ({
          ...prevData,
          image: reader.result,
          imageFileName: file.name,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form>
      <p>Profile Image</p>
      <fieldset>
        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
        {resumeData.imageFileName && (
          <span style={{ 
            fontSize: '14px', 
            color: '#e2e8f0', 
            display: 'block',
            maxWidth: '275px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>Currently saved: {resumeData.imageFileName}</span>
        )}
      </fieldset>
    </form> 
  )
}

export default UploadImage