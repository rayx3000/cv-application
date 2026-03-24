import React, { useState } from 'react'
import Form from "../components/Form/Form"
import CV from "../components/CV/CV"
import './Main.css';
import { resumeData as initialData } from '../components/CV/ResumeData.js';

const Main = () => {
  const [resumeData, setResumeData] = useState(initialData);

  return (
    <main>
        <Form setResumeData={setResumeData} resumeData={resumeData} />
        <CV resumeData={resumeData} />
    </main>
  )
}

export default Main