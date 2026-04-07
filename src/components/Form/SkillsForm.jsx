import React, { useState } from 'react'

const SkillsForm = ({ setResumeData, resumeData }) => {
  const [newSkill, setNewSkill] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAdd = () => {
    if (!newSkill.trim()) return;
    if (isEditing) {
      setResumeData(prevData => {
        const updated = [...prevData.expertise];
        updated[editIndex] = newSkill;
        return { ...prevData, expertise: updated };
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setResumeData(prevData => ({
        ...prevData,
        expertise: [...prevData.expertise, newSkill]
      }));
    }
    setNewSkill('');
  };

  const handleEdit = (index) => {
    setNewSkill(resumeData.expertise[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setResumeData(prevData => ({
      ...prevData,
      expertise: prevData.expertise.filter((_, i) => i !== index)
    }));
    
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewSkill('');
    } else if (isEditing && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <form>
      <p>Skills</p>
      <div className='saved-container skills-container'>
        {resumeData?.expertise?.map((skill, index) => (
          !(isEditing && editIndex === index) && (
            <div key={index} className='skills'>
              <p>{skill}</p>
              <div className='saved-options'>
                <i className="fa-solid fa-pen" onClick={() => handleEdit(index)}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
              </div>
            </div>
          )
        ))}
      </div>
      <fieldset>
        <label htmlFor="skill">Skill:</label>
        <input type="text" id="skill" name="skill" placeholder="e.g., JavaScript, React, Node.js" value={newSkill} onChange={handleChange} />
      </fieldset>
      <button id="addSkill" type="button" onClick={handleAdd}>
        {isEditing ? 'Update Skill' : 'Add Skill'}
      </button>
    </form>
  )
}

export default SkillsForm