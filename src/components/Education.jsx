import { useState, useEffect } from "react";
import "./Education.css";

export default function Education() {
  const [educations, setEducations] = useState([]);

  // fetch all movies info from the database, order by the popularity (default by the API database)
  async function fetchEducations() {
    // the API syntax, take apiKey as a parameter
    let response = await fetch("https://c9674390.mywhc.ca/api/educations");
    let data = await response.json();
    console.log(data);
    setEducations(data);
  }

  // set fetchMovies() once to update
  useEffect(() => {
    fetchEducations();
  }, []);

  return (
    <div className="educationWrap" id="education">
      <p className="educationText">My Education</p>
      {educations.map((education) => (
        <div className="educationContainer" key={education.id}>
          <div className="educationDrgree">{education.degree}</div>
          <div className="educationSchool">{education.school}</div>
          <div className="educationDate">{education.date}</div>
          <div className="educationCourse">{education.course}</div>
        </div>
      ))}
    </div>
  );
}
