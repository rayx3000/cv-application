import React from 'react';
import './CV.css';
import CVSidebar from './CVSidebar.jsx';
import CVMain from './CVMain.jsx';

const CV = ({ resumeData }) => {
  return (
    <div className="cv-container">
      <h1>My CV</h1>
      <div className="cv-content">
        <CVSidebar resumeData={resumeData} />
        <CVMain resumeData={resumeData} />
      </div> 
    </div> 
  );
};

export default CV;