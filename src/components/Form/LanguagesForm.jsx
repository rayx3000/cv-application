import React, { useState } from 'react'

const LanguagesForm = ({ setResumeData, resumeData }) => {
  const [newLanguage, setNewLanguage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setNewLanguage(e.target.value);
  };

  const handleAdd = () => {
    if (!newLanguage.trim()) return;
    if (isEditing) {
      setResumeData(prevData => {
        const updated = [...prevData.languages];
        updated[editIndex] = newLanguage;
        return { ...prevData, languages: updated };
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setResumeData(prevData => ({
        ...prevData,
        languages: [...prevData.languages, newLanguage]
      }));
    }
    setNewLanguage('');
  };

  const handleEdit = (index) => {
    setNewLanguage(resumeData.languages[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setResumeData(prevData => ({
      ...prevData,
      languages: prevData.languages.filter((_, i) => i !== index)
    }));
    
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewLanguage('');
    } else if (isEditing && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <form>
      <p>Languages</p>
      <div className='saved-container languages-completed'>
        {resumeData?.languages?.map((lang, index) => (
          !(isEditing && editIndex === index) && (
            <div key={index}>
              <p><span>{lang}</span></p>
              <div className='saved-options'>
                <i className="fa-solid fa-pen" onClick={() => handleEdit(index)}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
              </div>
            </div>
          )
        ))}
      </div>
      <fieldset>
        <label htmlFor="language">Language:</label>
        <input type="text" id="language" name="language" placeholder='e.g English, Filipino, Spanish' value={newLanguage} onChange={handleChange} />
      </fieldset>
      <button id="addLanguage" type="button" onClick={handleAdd}>
        {isEditing ? 'Update Language' : 'Add Language'}
      </button>
    </form>
  )
}

export default LanguagesForm