import React, { useState } from 'react'

const WorkForm = ({ setResumeData, resumeData }) => {
  const [newWork, setNewWork] = useState({
    company: '',
    role: '',
    years: '',
    description: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWork(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (isEditing) {
      setResumeData(prevData => {
        const updated = [...prevData.experience];
        updated[editIndex] = newWork;
        return { ...prevData, experience: updated };
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setResumeData(prevData => ({
        ...prevData,
        experience: [...prevData.experience, newWork]
      }));
    }
    setNewWork({ company: '', role: '', years: '', description: '' });
  };

  const handleEdit = (index) => {
    setNewWork(resumeData.experience[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setResumeData(prevData => ({
      ...prevData,
      experience: prevData.experience.filter((_, i) => i !== index)
    }));
    
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewWork({ company: '', role: '', years: '', description: '' });
    } else if (isEditing && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <form>
      <p>Work Experience</p>
      <div className='saved-container work-completed'>
        {resumeData?.experience?.map((exp, index) => (
          <div key={index}>
            <p><span>{exp.company}</span>/<span>{exp.role}</span></p>
            <div className='saved-options'>
              <i className="fa-solid fa-pen" onClick={() => handleEdit(index)}></i>
              <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
            </div>
          </div>
        ))}
      </div>
      <fieldset>
        <label htmlFor="company">Company Name:</label>
        <input type="text" id="company" name="company" placeholder='e.g. Open AI' value={newWork.company || ''} onChange={handleChange} />
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="role" placeholder='e.g. Software Engineer' value={newWork.role || ''} onChange={handleChange} />
        <label htmlFor="years">Years:</label>
        <input type="text" id="years" name="years" placeholder="e.g 2020-2024" value={newWork.years || ''} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" placeholder='Type your experience here...' value={newWork.description || ''} onChange={handleChange}></textarea>
      </fieldset>
      <button id="addExperience" type="button" onClick={handleAdd}>
        {isEditing ? 'Update Experience' : 'Add Experience'}
      </button>
    </form>
  )
}

export default WorkForm