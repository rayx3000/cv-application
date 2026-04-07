import React, { useState } from 'react'

const CertificationsForm = ({ setResumeData, resumeData }) => {
  const [newCert, setNewCert] = useState({
    name: '',
    company: '',
    date: '',
    desc: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCert(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (isEditing) {
      setResumeData(prevData => {
        const updated = [...prevData.certifications];
        updated[editIndex] = newCert;
        return { ...prevData, certifications: updated };
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setResumeData(prevData => ({
        ...prevData,
        certifications: [...prevData.certifications, newCert]
      }));
    }
    setNewCert({ name: '', company: '', date: '', desc: '' });
  };

  const handleEdit = (index) => {
    setNewCert(resumeData.certifications[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setResumeData(prevData => ({
      ...prevData,
      certifications: prevData.certifications.filter((_, i) => i !== index)
    }));
    
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewCert({ name: '', company: '', date: '', desc: '' });
    } else if (isEditing && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
     <form>
        <p>Certifications</p>
        <div className='saved-container certifications-completed'>
          {resumeData?.certifications?.map((cert, index) => (
            !(isEditing && editIndex === index) && (
              <div key={index}>
                <p><span>{cert.name}</span>/<span>{cert.company}</span></p>
                <div className='saved-options'>
                  <i className="fa-solid fa-pen" onClick={() => handleEdit(index)}></i>
                  <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
                </div>
              </div>
            )
          ))}
        </div>
        <fieldset>
          <label htmlFor="certification">Certification Name:</label>
          <input type="text" id="certification" name="name" minLength="2" maxLength="50" placeholder='e.g AWS Certified Solutions Architect' value={newCert.name || ''} onChange={handleChange} />
          <label htmlFor="issuer">Issuing Organization:</label>
          <input type="text" id="issuer" name="company" minLength="2" maxLength="50" placeholder='e.g Amazon Web Services' value={newCert.company || ''} onChange={handleChange} />
          <label htmlFor="date">Date Earned:</label>
          <input type="date" id="date" name="date" value={newCert.date || ''} onChange={handleChange} />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="desc" minLength="2" maxLength="200" placeholder='Type your experience here...' value={newCert.desc || ''} onChange={handleChange}></textarea>
        </fieldset>
        <button id="addCertification" type="button" onClick={handleAdd}>
          {isEditing ? 'Update Certification' : 'Add Certification'}
        </button>
      </form>
  )
}

export default CertificationsForm