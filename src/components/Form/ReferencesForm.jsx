import React, { useState } from 'react'

const ReferencesForm = ({ setResumeData, resumeData }) => {
  const [newRef, setNewRef] = useState({
    name: '',
    company: '',
    phone: '',
    email: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRef(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (isEditing) {
      setResumeData(prevData => {
        const updated = [...prevData.references];
        updated[editIndex] = newRef;
        return { ...prevData, references: updated };
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setResumeData(prevData => ({
        ...prevData,
        references: [...prevData.references, newRef]
      }));
    }
    setNewRef({ name: '', company: '', phone: '', email: '' });
  };

  const handleEdit = (index) => {
    setNewRef(resumeData.references[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setResumeData(prevData => ({
      ...prevData,
      references: prevData.references.filter((_, i) => i !== index)
    }));
    
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewRef({ name: '', company: '', phone: '', email: '' });
    } else if (isEditing && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
     <form>
        <p>References</p>
        <div className='saved-container references-completed'>
          {resumeData?.references?.map((ref, index) => (
            <div key={index}>
              <p><span>{ref.name}</span>/<span>{ref.company}</span></p>
              <div className='saved-options'>
                <i className="fa-solid fa-pen" onClick={() => handleEdit(index)}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
              </div>
            </div>
          ))}
        </div>
        <fieldset>
          <label htmlFor="referenceName">Reference Name:</label>
          <input type="text" id="referenceName" name="name" placeholder='e.g. Jane Smith' minLength="2" maxLength="20" value={newRef.name || ''} onChange={handleChange} />
          <label htmlFor="referenceContact">Reference Contact:</label>
          <input type="text" id="referenceContact" name="phone" placeholder='e.g. 123-456-7890' minLength="10" maxLength="15" value={newRef.phone || ''} onChange={handleChange} />
          <label htmlFor="referenceEmail">Reference Email:</label>
          <input type="email" id="referenceEmail" name="email" placeholder='e.g. janesmith@example.com' minLength="2" maxLength="20" value={newRef.email || ''} onChange={handleChange} />
          <label htmlFor='referenceWork'>Reference Work:</label>
          <input type="text" id="referenceWork" name="company" placeholder='e.g. Software Engineer' minLength="2" maxLength="20" value={newRef.company || ''} onChange={handleChange} />
        </fieldset>
        <button id="addReference" type="button" onClick={handleAdd}>
          {isEditing ? 'Update Reference' : 'Add Reference'}
        </button>
      </form>  
  )
}

export default ReferencesForm