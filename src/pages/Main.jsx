import React from 'react';
import Form from "../components/Form/Form";
import CV from "../components/CV/CV";
import './Main.css';
import { useResumeData } from '../components/CV/useResumeData.js';

const Main = () => {
  const { resumeData, updateResumeData } = useResumeData();

  return (
    <main>
        <Form setResumeData={updateResumeData} resumeData={resumeData} />
        <CV resumeData={resumeData} />
    </main>
  )
}

export default Main