import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type student = {
  studentName: string,
  course: string
}

function App() {
  const studentName: string = "Adrian Czegie Abubo";
  const course: string = "Bachelor of Science in Information Technology";
  const isEnrolled: Boolean = true;
  const subjects: string[] = ["APTECH", "DBMWEB1", "PROGIT2"];

  return (
    <>
      <h1>{studentName}</h1>
      <p>{course}</p>
      <p>{isEnrolled ? "Student is enrolled" : "Student is not enrolled"}</p>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
          ))}
      </ul>
    </>
  )
}

export default App