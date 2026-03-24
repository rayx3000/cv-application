import React, { useState } from 'react'

const EducationForm = ({ setResumeData, resumeData }) => {
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    field: '',
    startYear: '',
    endYear: ''
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
      field: '',
      startYear: '',
      endYear: ''
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
    
    // Reset edit state if deleting the item currently being edited
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewEducation({
        school: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: ''
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
        <input type="text" id="school" name="school" placeholder='University Of Philippines' value={newEducation.school || ''} onChange={handleChange}/>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" placeholder='e.g Bachelor of Science' value={newEducation.degree || ''} onChange={handleChange}/>
        <label htmlFor="field">Field of Study:</label>
        <input type="text" id="field" name="field" placeholder='e.g Computer Science' value={newEducation.field || ''} onChange={handleChange}/>
        <label htmlFor="startYear">Start:</label>
        <input type="date" id="startYear" name="startYear" value={newEducation.startYear || ''} onChange={handleChange} />
        <label htmlFor="endYear">Graduate Year:</label>
        <input type="date" id="endYear" name="endYear" value={newEducation.endYear || ''} onChange={handleChange} />
      </fieldset>
      <button id="addEducation" type="button" onClick={handleAddEducation}>
        {isEditing ? 'Update Education' : 'Add Education'}
      </button>            
    </form>
  )
}

export default EducationForm