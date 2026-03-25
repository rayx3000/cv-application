import { useState, useEffect } from "react";
import { resumeData as initialData } from "./ResumeData";

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  const updateResumeData = (newData) => {
    setResumeData(newData);
  };

  return { resumeData, updateResumeData };
};
