import React, { useContext } from 'react';
import './CV.css';
import CVSidebar from './CVSidebar.jsx';
import CVMain from './CVMain.jsx';
import { AppContext } from '../../App.jsx';

const CV = ({ resumeData }) => {
  const { isCvVisible } = useContext(AppContext);

  if (!isCvVisible) {
    return null;
  }

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