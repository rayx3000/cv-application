import React, { useState } from 'react'

const EducationForm = ({ setResumeData, resumeData }) => {
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    years: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleAddEducation = () => {
    if (isEditing) {
      setResumeData(prevData => {
        const updatedEducation = [...prevData.education];
        updatedEducation[editIndex] = newEducation;
        return { ...prevData, education: updatedEducation };
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setResumeData(prevData => ({
        ...prevData,
        education: [...prevData.education, newEducation]
      }));
    }
    setNewEducation({
      school: '',
      degree: '',
      years: ''
    });
  };

  const handleEdit = (index) => {
    setNewEducation(resumeData.education[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setResumeData(prevData => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index)
    }));
    
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewEducation({
        school: '',
        degree: '',
        years: ''
      });
    } else if (isEditing && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <form>
      <p>Education Background</p>
      <div className='saved-container education-completed'>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <p><span>{edu.school}</span>/<span>{edu.degree}</span></p>
            <div className='saved-options'>
              <i id="edit" className="fa-solid fa-pen" onClick={() => handleEdit(index)}></i>
              <i id="delete" className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
            </div>
          </div>
        ))}
      </div>
      <fieldset>
        <label htmlFor="school">School Name:</label>
        <input type="text" id="school" name="school" minLength="2" maxLength="30" placeholder='University Of Philippines' value={newEducation.school || ''} onChange={handleChange}/>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" minLength="2" maxLength="30" placeholder='e.g Bachelor of Science' value={newEducation.degree || ''} onChange={handleChange}/>
        <label htmlFor="years">Years:</label>
        <input type="text" id="years" name="years" minLength="2" maxLength="20" placeholder='e.g 2020 - 2024' value={newEducation.years || ''} onChange={handleChange} />
      </fieldset>
      <button id="addEducation" type="button" onClick={handleAddEducation}>
        {isEditing ? 'Update Education' : 'Add Education'}
      </button>            
    </form>
  )
}

export default EducationForm