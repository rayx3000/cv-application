import React from 'react';
import './CV.css';
import { resumeData } from './ResumeData.js';
import CVSidebar from './CVSidebar.jsx';
import CVMain from './CVMain.jsx';

const CV = () => {
  return (
    <div className="cv-container">
      <h1>My CV</h1>
      <div className="cv-content">
        <CVSidebar />
        <CVMain />
      </div> 
    </div> 
  );
};

export default CV;